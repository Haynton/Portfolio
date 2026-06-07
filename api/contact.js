import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const lastSubmission = new Map();
const RATE_LIMIT_MS = 60 * 1000; // 1 minute entre chaque envoi

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const now = Date.now();
  const last = lastSubmission.get(ip);

  if (last && now - last < RATE_LIMIT_MS) {
    return res.status(429).json({ error: "Please wait before sending another message." });
  }

  lastSubmission.set(ip, now);

  const { firstname, lastname, email, message, honeypot } = req.body;

  if (honeypot) {
    return res.status(400).json({ error: "Spam detected" });
  }

  if (!firstname || !lastname || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    await resend.emails.send({
      from: "Portfolio <contact@anthonyquenet.com>",
      to: "anthony.quenet@icloud.com",
      reply_to: `${firstname} ${lastname} <${email}>`,
      subject: `New message from ${firstname} ${lastname}`,
      text: `From: ${firstname} ${lastname}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Email sending failed" });
  }
}
