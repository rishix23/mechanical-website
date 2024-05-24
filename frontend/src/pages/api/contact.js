// pages/api/contact.js
import dbConnect from "../../utils/dbConnect";
import Contact from "../../models/contact";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, subject, phone, email, message } = req.body;

    // Connect to the database
    await dbConnect();

    // Save to the database
    try {
      const contact = new Contact({ name, subject, phone, email, message });
      await contact.save();
    } catch (error) {
      console.error("Error saving to database:", error);
      return res.status(500).json({ message: "Error saving to database" });
    }

    // Set up the transporter using your Gmail account
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your Gmail password or App Password
      },
    });

    try {
      // Send mail with defined transport object
      await transporter.sendMail({
        from: `"Contact Form" <${process.env.EMAIL_USER}>`, // sender address
        to: process.env.EMAIL_USER, // list of receivers (your Gmail address)
        subject: `New Contact Form Submission: ${subject}`, // Subject line
        text: `You have a new contact form submission:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`, // plain text body
        html: `<p>You have a new contact form submission:</p>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Phone:</strong> ${phone}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`, // html body
      });

      // Respond with success message
      res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
