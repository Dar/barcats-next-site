import * as functions from "firebase-functions/v1";
import cors from "cors";
import nodemailer from "nodemailer";
import * as dotenv from "dotenv";

const runningLocally =
  process.env.FUNCTIONS_EMULATOR === "true" ||
  !!process.env.FIREBASE_EMULATOR_HUB ||
  process.env.NODE_ENV === "development";

if (runningLocally) {
  // Try multiple paths for .env file
  try {
    dotenv.config({ path: "./.env" });
  } catch {
    try {
      dotenv.config({ path: "../.env" });
    } catch {
      dotenv.config({ path: "../../.env" });
    }
  }
}

function need(name: string): string {
  const v = process.env[name];
  if (!v) {
    console.error(`Missing required environment variable: ${name}`);
    throw new Error(`Missing required env: ${name}`);
  }
  return v;
}

let cachedTransporter: nodemailer.Transporter | null = null;

async function getTransporter(): Promise<nodemailer.Transporter> {
  if (cachedTransporter) return cachedTransporter;

  console.log("Creating new transporter...");

  // Verify all required environment variables exist
  const gmailSender = need("GMAIL_SENDER");
  const clientId = need("GMAIL_CLIENT_ID");
  const clientSecret = need("GMAIL_CLIENT_SECRET");
  const refreshToken = need("GMAIL_REFRESH_TOKEN");

  console.log(`Setting up OAuth2 for: ${gmailSender}`);

  cachedTransporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // 465 = implicit TLS
    auth: {
      type: "OAuth2",
      user: gmailSender,
      clientId,
      clientSecret,
      refreshToken,
    },
  });

  try {
    console.log("Verifying SMTP connection...");
    await cachedTransporter.verify();
    console.log("SMTP(OAuth2) verification successful");
  } catch (error) {
    console.error("SMTP(OAuth2) verification failed:", error);
    cachedTransporter = null; // Clear cache on failure
    throw new Error(`Email service verification failed: ${error}`);
  }

  return cachedTransporter;
}

// Enhanced CORS configuration
const corsHandler = cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:3001", // Common alternative port
    "http://localhost:5000",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:5000",
    "https://barcats.ca",
    "https://www.barcats.ca",
    "https://barcatscleaning.firebaseapp.com",
    "https://barcatscleaning.web.app",
  ],
  methods: ["POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
});

// Enhanced input sanitization
const stripCRLF = (s: string): string =>
  String(s ?? "").replace(/[\r\n\t]+/g, " ").trim();

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
};

const sanitizeInput = (input: string, maxLength = 1000): string => {
  return stripCRLF(input).slice(0, maxLength);
};

export const sendEmail = functions
  .runWith({
    secrets: runningLocally
      ? []
      : ["GMAIL_CLIENT_ID", "GMAIL_CLIENT_SECRET", "GMAIL_REFRESH_TOKEN", "GMAIL_SENDER"],
    memory: "256MB",
    timeoutSeconds: 60,
  })
  .https.onRequest(async (req, res) => {
    return new Promise<void>((resolve) => {
      corsHandler(req, res, async () => {
        try {
          console.log(`Received ${req.method} request from ${req.get('origin')}`);
          if (req.method === "OPTIONS") {
            res.status(204).end();
            resolve();
            return;
          }

          // Only allow POST requests
          if (req.method !== "POST") {
            res.status(405).json({
              ok: false,
              error: "Method Not Allowed - only POST requests accepted"
            });
            resolve();
            return;
          }

          // Validate content type
          if (!req.is("application/json")) {
            res.status(400).json({
              ok: false,
              error: "Invalid content type - application/json required"
            });
            resolve();
            return;
          }

          // Extract and validate form data
          const { name, email, message, honeypot, phone } = req.body ?? {};

          // Security: Check honeypot field (should be empty)
          if (honeypot || phone) {
            console.log("Spam attempt detected - honeypot triggered");
            res.status(400).json({
              ok: false,
              error: "Invalid submission detected"
            });
            resolve();
            return;
          }

          // Sanitize inputs
          const cleanName = sanitizeInput(name, 100);
          const cleanEmail = sanitizeInput(email, 254);
          const cleanMessage = sanitizeInput(message, 4000);

          // Validate required fields
          if (!cleanName || !cleanEmail || !cleanMessage) {
            res.status(400).json({
              ok: false,
              error: "All fields (name, email, message) are required"
            });
            resolve();
            return;
          }

          // Validate email format
          if (!isValidEmail(cleanEmail)) {
            res.status(400).json({
              ok: false,
              error: "Please provide a valid email address"
            });
            resolve();
            return;
          }

          // Additional security checks
          if (cleanName.length < 1) {
            res.status(400).json({
              ok: false,
              error: "Name must be at least 2 characters"
            });
            resolve();
            return;
          }

          console.log(`Processing contact form from: ${cleanName} <${cleanEmail}>`);

          // Get email transporter
          const transporter = await getTransporter();
          const sender = need("GMAIL_SENDER");

          // Enhanced email content with better formatting
          const emailSubject = `🔔 New Contact Form Message from ${cleanName}`;
          const emailText = `
                  New contact form submission from Bar Cats website:

                  From: ${cleanName}
                  Email: ${cleanEmail}
                  Message: ${cleanMessage}

                  ---
                  Sent via Bar Cats Contact Form
                  Time: ${new Date().toLocaleString()}
            `.trim();

          const emailHtml = `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                  📧 New Contact Form Message
                </h2>
                <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                  <p><strong>From:</strong> ${cleanName}</p>
                  <p><strong>Email:</strong> <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
                  <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
                </div>
                <div style="background: white; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
                  <h3 style="margin-top: 0; color: #555;">Message:</h3>
                  <p style="line-height: 1.6; white-space: pre-wrap;">${cleanMessage}</p>
                </div>
                <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
                <p style="color: #666; font-size: 12px; text-align: center;">
                  Sent via Bar Cats Contact Form
                </p>
              </div>
            `;

          const recipient = process.env.GMAIL_RECIPIENT || sender;

          // Send the email
          const info = await transporter.sendMail({
            from: `"Bar Cats Contact Form" <${sender}>`,
            replyTo: cleanEmail,
            to: recipient, // <= now goes to d***@gmail.com if set
            subject: emailSubject,
            text: emailText,
            html: emailHtml,
          });

          console.log(`Email sent successfully. Message ID: ${info.messageId}`);

          res.status(200).json({
            ok: true,
            messageId: info.messageId,
            message: "Your message has been sent successfully! We'll get back to you soon."
          });
          resolve();

        } catch (error: any) {
          console.error("sendEmail function error:", error);

          // Enhanced error handling with specific error types
          let errorMessage = `Unable to send message right now. Please try again later. ${JSON.stringify(error)}`;
          let statusCode = 500;

          if (error.message?.includes("Missing required env")) {
            errorMessage = "Server configuration error. Please contact support.";
            console.error("Environment variables not properly configured");
          } else if (error.message?.includes("OAuth2") || error.code === "EAUTH") {
            errorMessage = "Email service authentication error. Please contact support.";
            console.error("OAuth2 authentication failed - check credentials");
          } else if (error.code === "ECONNECTION" || error.code === "ETIMEDOUT") {
            errorMessage = "Connection timeout. Please try again.";
            statusCode = 503;
          }

          res.status(statusCode).json({
            ok: false,
            error: errorMessage,
            ...(runningLocally && { debug: error.message })
          });
          resolve();
        }
      });
    });
  });


export const testEnv = functions.https.onRequest(async (req, res) => {
  const requiredEnvs = [
    'GMAIL_SENDER',
    'GMAIL_CLIENT_ID',
    'GMAIL_CLIENT_SECRET',
    'GMAIL_REFRESH_TOKEN'
  ];

  const envStatus = requiredEnvs.map(env => ({
    name: env,
    exists: !!process.env[env],
    length: process.env[env]?.length || 0
  }));

  res.json({
    environment: process.env.NODE_ENV,
    emulator: process.env.FUNCTIONS_EMULATOR,
    envVars: envStatus
  });
});
