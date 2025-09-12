import type { NextApiRequest, NextApiResponse } from "next";

interface EmailResponse {
  ok: boolean;
  message?: string;
  messageId?: string;
  error?: string;
  debug?: string;
}

export default async function sendEmail(
  req: NextApiRequest, 
  res: NextApiResponse<EmailResponse>
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ 
      ok: false, 
      error: "Method Not Allowed - only POST requests accepted" 
    });
  }

  // Validate content type
  const ctype = (req.headers['content-type'] || '').toLowerCase();
  if (!ctype.includes('application/json')) {
    return res.status(400).json({
      ok: false,
      error: 'Invalid content type - application/json required'
    });
  }

  try {
    console.log("Forwarding email request to Firebase function...");

    let firebaseUrl: string;
    
    if (process.env.NODE_ENV === "development") {
      const emulatorHost = process.env.FIREBASE_EMULATOR_HOST || "localhost";
      const emulatorPort = process.env.FIREBASE_FUNCTIONS_PORT || "5001";
      const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "your-project-id";
      
      firebaseUrl = `http://${emulatorHost}:${emulatorPort}/${projectId}/us-central1/sendEmail`;
      console.log(`Using local emulator: ${firebaseUrl}`);
    } else {
      // Production Firebase function
      const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "your-project-id";
      const region = process.env.FIREBASE_REGION || "us-central1";
      firebaseUrl = `https://${region}-${projectId}.cloudfunctions.net/sendEmail`;
      console.log(`Using production function: ${firebaseUrl}`);
    }

    // Override with custom URL if provided
    if (process.env.NEXT_PUBLIC_SENDMAIL) {
      firebaseUrl = process.env.NEXT_PUBLIC_SENDMAIL;
      console.log(`Using custom URL from env: ${firebaseUrl}`);
    }

    // Add request timeout and enhanced error handling
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    console.log("Making request to Firebase function...");
    console.log("Request body:", JSON.stringify(req.body, null, 2));

    const response = await fetch(firebaseUrl, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "User-Agent": "NextJS-API-Route/1.0"
      },
      body: JSON.stringify(req.body),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    console.log(`Firebase function responded with status: ${response.status}`);

    let payload: EmailResponse | null = null;
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      try {
        payload = await response.json();
        console.log("Response payload:", JSON.stringify(payload, null, 2));
      } catch (jsonError) {
        console.warn("Failed to parse JSON response from Firebase function:", jsonError);
        payload = { 
          ok: false, 
          error: "Invalid response format from email service" 
        };
      }
    } else {
      console.warn("Non-JSON response from Firebase function");
      const textResponse = await response.text();
      console.log("Text response:", textResponse);
      payload = { 
        ok: false, 
        error: "Invalid response format from email service" 
      };
    }

    // Handle different response scenarios
    if (!response.ok) {
      console.error(`Firebase function error (${response.status}):`, payload);
      
      // Return appropriate error status
      const errorStatus = response.status >= 400 && response.status < 500 
        ? response.status  // Client errors (400-499)
        : 500;             // Server errors (500+) -> normalize to 500

      return res.status(errorStatus).json(
        payload ?? { 
          ok: false, 
          error: `Email service error (${response.status})` 
        }
      );
    }

    // Success case
    console.log("Email sent successfully via Firebase function");
    return res.status(200).json(
      payload ?? { 
        ok: true, 
        message: "Email sent successfully" 
      }
    );

  } catch (error: any) {
    console.error("Error in Next.js API route:", error);

    // Enhanced error categorization
    let errorMessage = "Server error while sending email";
    let statusCode = 500;

    if (error.name === 'AbortError') {
      errorMessage = "Request timeout - email service took too long to respond";
      statusCode = 504; // Gateway timeout
    } else if (error.code === 'ECONNREFUSED') {
      errorMessage = "Cannot connect to email service";
      console.error("Connection refused - is Firebase emulator running?");
    } else if (error.code === 'ENOTFOUND') {
      errorMessage = "Email service not found";
      console.error("DNS resolution failed - check Firebase function URL");
    } else if (error.message?.includes('fetch')) {
      errorMessage = "Network error while contacting email service";
      statusCode = 503; // Service unavailable
    }

    return res.status(statusCode).json({ 
      ok: false, 
      error: errorMessage,
      ...(process.env.NODE_ENV === "development" && { 
        debug: error.message,
        stack: error.stack 
      })
    });
  }
}