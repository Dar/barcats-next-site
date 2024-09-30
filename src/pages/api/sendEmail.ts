import type { NextApiRequest, NextApiResponse } from "next";

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_SENDMAIL as string,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      }
    );

    if (response.ok) {
      console.log("EMAIL", req.body.data)
      res.status(200).json({ message: "Your message has been successfully" });
    } else {
      const errorData = await response.json();
      console.error("Error response from Firebase:", errorData);
      res.status(500).json({ error: "Failed to send email" });
    }
  } catch (error) {
    console.error("Error forwarding email request:", error);
    res.status(500).json({ error: "Server error while sending email" });
  }
};

export default sendEmail;
