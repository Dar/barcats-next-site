import type { NextApiRequest, NextApiResponse } from "next";

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    process.env.NEXT_FIREBASE_SERVER as string,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    }
  );

  if (response.ok) {
    res.status(200).json({ message: "Email sent successfully" });
  } else {
    res.status(500).json({ error: "Failed to send email" });
  }
};

export default sendEmail;