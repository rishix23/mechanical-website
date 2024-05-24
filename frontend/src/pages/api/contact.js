import dbConnect from "../../utils/dbConnect";
import Contact from "../../models/contact";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("Received POST request");

    const { name, subject, phone, email, message } = req.body;

    try {
      await dbConnect();
      console.log("Database connected");
    } catch (error) {
      console.error("Error connecting to database:", error);
      return res.status(500).json({ message: "Error connecting to database" });
    }

    try {
      const contact = new Contact({ name, subject, phone, email, message });
      await contact.save();
      console.log("Data saved to database");
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
      await transporter.sendMail({
        from: `"Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Submission: ${subject}`,
        text: `You have a new contact form submission:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
        html: `<p>You have a new contact form submission:</p>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Phone:</strong> ${phone}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      });
      console.log("Email sent successfully");

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
