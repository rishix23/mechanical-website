"use client";

import { useState } from "react";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faCheckCircle,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [atlanticExpanded, setAtlanticExpanded] = useState(false);
  const [capeMayExpanded, setCapeMayExpanded] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.", {
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
        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | D.R. Mechanical</title>
        <meta name="description" content="Contact D.R. Mechanical for all your HVAC needs. Available 24/7 for emergencies. Serving Atlantic and Cape May County." />
      </Head>

      {/* Form Section */}
      <section className={styles.formSection}>
        <div className={styles.formContainer}>
          <div className={styles.formLeft}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Send a Message</span>
              <h2 className={styles.sectionTitle}>Request Service or Get a Quote</h2>
            </div>
            <p className={styles.formDescription}>
              Fill out the form and we'll get back to you as soon as possible. For immediate assistance, please call us at (609) 748-2919.
            </p>
            <div className={styles.formFeatures}>
              <div className={styles.formFeature}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.formFeatureIcon} />
                <span>Free Estimates</span>
              </div>
              <div className={styles.formFeature}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.formFeatureIcon} />
                <span>24/7 Emergency Service</span>
              </div>
              <div className={styles.formFeature}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.formFeatureIcon} />
                <span>Same-Day Service Available</span>
              </div>

              {/* Service Area Expandable */}
              <div className={styles.serviceAreaFeature}>
                <div className={styles.serviceAreaHeader}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.formFeatureIcon} />
                  <span>Service Area</span>
                </div>

                {/* Atlantic County */}
                <div className={styles.countyItem}>
                  <button
                    className={styles.countyButton}
                    onClick={() => setAtlanticExpanded(!atlanticExpanded)}
                  >
                    <span>Atlantic County</span>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`${styles.chevron} ${atlanticExpanded ? styles.chevronOpen : ''}`}
                    />
                  </button>
                  {atlanticExpanded && (
                    <div className={styles.locationsList}>
                      <span>Absecon</span>
                      <span>Atlantic City</span>
                      <span>Brigantine</span>
                      <span>Buena</span>
                      <span>Egg Harbor City</span>
                      <span>Egg Harbor Township</span>
                      <span>Galloway</span>
                      <span>Hamilton Township</span>
                      <span>Hammonton</span>
                      <span>Linwood</span>
                      <span>Longport</span>
                      <span>Margate City</span>
                      <span>Mullica Township</span>
                      <span>Northfield</span>
                      <span>Pleasantville</span>
                      <span>Port Republic</span>
                      <span>Somers Point</span>
                      <span>Ventnor City</span>
                    </div>
                  )}
                </div>

                {/* Cape May County */}
                <div className={styles.countyItem}>
                  <button
                    className={styles.countyButton}
                    onClick={() => setCapeMayExpanded(!capeMayExpanded)}
                  >
                    <span>Cape May County</span>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`${styles.chevron} ${capeMayExpanded ? styles.chevronOpen : ''}`}
                    />
                  </button>
                  {capeMayExpanded && (
                    <div className={styles.locationsList}>
                      <span>Avalon</span>
                      <span>Cape May</span>
                      <span>Cape May Court House</span>
                      <span>Cape May Point</span>
                      <span>Dennis Township</span>
                      <span>Lower Township</span>
                      <span>Middle Township</span>
                      <span>North Wildwood</span>
                      <span>Ocean City</span>
                      <span>Sea Isle City</span>
                      <span>Stone Harbor</span>
                      <span>Upper Township</span>
                      <span>West Cape May</span>
                      <span>West Wildwood</span>
                      <span>Wildwood</span>
                      <span>Wildwood Crest</span>
                      <span>Woodbine</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Service Type *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g., AC Repair, Heating, etc."
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your HVAC needs..."
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton} disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              {!loading && <span className={styles.btnArrow}>→</span>}
            </button>
          </form>
        </div>
      </section>

      <ToastContainer />
    </>
  );
}
