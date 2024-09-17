import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";
import cors from "cors";
import express from "express";
import next from "next";

const corsHandler = (cors as any)({origin: true});
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: "out" } });
const handle = app.getRequestHandler();
const server = express();

if (process.env.NODE_ENV === 'development') {
  console.log("Running in development mode");
} else if (process.env.NODE_ENV === 'production') {
  console.log("Running in production mode");
}


const transporter = nodemailer.createTransport({
  host: process.env.GOOGLE_SMTP_SERVER,
  port: 465,
  secure: true,
  auth: {
    user: process.env.GOOGLE_USER_EMAIL,
    pass: process.env.GOOGLE_PASSWORD,
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
      from: email,
      to: process.env.GOOGLE_USER_EMAIL,
      subject: `Bar Cats site message from ${name}`,
      text: message,
    };

    return transporter.sendMail(mailOptions, (error) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      return res.status(200).send("Email sent successfully");
    });
  });
});

app.prepare().then(() => {
  server.all("*", (req, res) => {
    console.log("File: " + req);
    return handle(req, res);
  });

});

export const nextApp  = functions.https.onRequest(server);

