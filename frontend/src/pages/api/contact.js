// pages/api/contact.js
export default function handler(req, res) {
  if (req.method === "POST") {
    // Extract data from the request
    const { name, subject, phone, email, message } = req.body;

    // Process the data (e.g., send an email, save to a database, etc.)
    // For simplicity, we're just logging it to the console here
    console.log("Contact Form Submission:", { name, subject, phone, email, message });

    // Send a response
    res.status(200).json({ message: "Form submitted successfully" });
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
