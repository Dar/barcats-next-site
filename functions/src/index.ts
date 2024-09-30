import * as functions from "firebase-functions/v1";
import cors from "cors";
import * as nodemailer from "nodemailer";
import * as dotenv from "dotenv";

dotenv.config();
const corsHandler = (cors as any)({
  origin: ["http://localhost:3000", "https://barcats.ca"],
});

const transporter = nodemailer.createTransport({
  host: process.env.BC_GOOGLE_SMTP_SERVER,
  port: 465,
  secure: true,
  auth: {
    user: process.env.BC_GOOGLE_USER_EMAIL,
    pass: process.env.BC_GOOGLE_PASSWORD,
  },
});

export const sendEmail = functions.https.onRequest((req, res) => {
  corsHandler(req, res, () => {
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }
    const {name, email, message, honeypot} = req.body;

    if (honeypot) {
      return res.status(400).send("Invalid submission");
    }

    const mailOptions = {
      from: "Bar Cats Commercial Services",
      replyTo: email,
      to: process.env.BC_GOOGLE_USER_EMAIL,
      subject: `Bar Cats site message from ${name}`,
      text: message,
    };

    return transporter.sendMail(mailOptions, (error: any) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      return res.status(200).send("Your message has been sent successfully");
    });
  });
});
