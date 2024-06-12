// pages/contact.js
"use client";

import { useState } from "react";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Form submitted successfully", {
          position: "top-right",
        });
        setFormData({
          name: "",
          subject: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("Failed to submit form", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("Failed to submit form", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Contact Us - D.R Mechanical</title>
        <meta name="description" content="Contact D.R Mechanical Heating Cooling Refrigeration LLC." />
      </Head>
      <section className={styles.contact}>
        <h1>Contact Us</h1>
        <p>If you have any questions, please dont hesitate to reach out to us. You can contact us via the form below or by phone. We are here to help you 24/7.</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
        <div className={styles.contactDetails}>
          <h2>Our Office</h2>
          <p>
            1234 Main Street,
            <br />
            Galloway, NJ 08205
            <br />
            Phone: (555) 555-5555
            <br />
            Email: info@drmechanical.com
          </p>
        </div>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2936095171076!2d-122.41941618468225!3d37.77492927975852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085817d4f0b8b0f%3A0xe8a3a99875c7ae24!2sGoogle!5e0!3m2!1sen!2sus!4v1616194232565!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"></iframe>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}
