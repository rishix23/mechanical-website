import dbConnect from "../../utils/dbConnect";
import Contact from "../../models/contact";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("Received POST request");

    const { name, subject, phone, email, message } = req.body;

    try {
      await Promise.race([dbConnect().then(() => console.log("Database connected")), new Promise((_, reject) => setTimeout(() => reject(new Error("Database connection timeout")), 5000))]);
    } catch (error) {
      console.error("Error connecting to database:", error);
      return res.status(500).json({ message: "Error connecting to database" });
    }

    try {
      const contact = new Contact({ name, subject, phone, email, message });
      await Promise.race([contact.save().then(() => console.log("Data saved to database")), new Promise((_, reject) => setTimeout(() => reject(new Error("Database save timeout")), 5000))]);
    } catch (error) {
      console.error("Error saving to database:", error);
      return res.status(500).json({ message: "Error saving to database" });
    }

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await Promise.race([
        transporter
          .sendMail({
            from: `"Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `New Contact Form Submission: ${subject}`,
            text: `You have a new contact form submission:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
            html: `<p>You have a new contact form submission:</p>
                 <p><strong>Name:</strong> ${name}</p>
                 <p><strong>Phone:</strong> ${phone}</p>
                 <p><strong>Email:</strong> ${email}</p>
                 <p><strong>Message:</strong> ${message}</p>`,
          })
          .then(() => console.log("Email sent successfully")),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Email send timeout")), 5000)),
      ]);

      res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
