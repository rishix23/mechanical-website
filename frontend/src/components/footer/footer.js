"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faEnvelope, faLocationDot, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          {/* Logo & About */}
          <div className={styles.footerCol}>
            <Image src="/logo.png" alt="D.R. Mechanical Logo" width={200} height={55} className={styles.footerLogo} />
            <p className={styles.footerAbout}>
              Professional HVAC services for Atlantic and Cape May County. Licensed, insured, and committed to your comfort.
            </p>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/drmechanicalllc" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FontAwesomeIcon icon={faSquareFacebook} />
              </a>
              <a href="https://www.linkedin.com/in/tj-walia-6258466a/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="mailto:drmechanicalllc@gmail.com" className={styles.socialIcon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerCol}>
            <h3 className={styles.footerHeading}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/heating">Heating</Link></li>
              <li><Link href="/cooling">Cooling</Link></li>
              <li><Link href="/refrigeration">Refrigeration</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.footerCol}>
            <h3 className={styles.footerHeading}>Services</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/cooling">AC Repair & Installation</Link></li>
              <li><Link href="/heating">Furnace Repair</Link></li>
              <li><Link href="/refrigeration">Commercial Refrigeration</Link></li>
              <li><Link href="/contact">Emergency Service</Link></li>
              <li><Link href="/contact">Maintenance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.footerCol}>
            <h3 className={styles.footerHeading}>Contact Us</h3>
            <div className={styles.contactInfo}>
              <a href="tel:6097482919" className={styles.contactItem}>
                <FontAwesomeIcon icon={faPhone} className={styles.contactIcon} />
                <span>(609) 748-2919</span>
              </a>
              <a href="tel:6097486580" className={styles.contactItem}>
                <FontAwesomeIcon icon={faPhone} className={styles.contactIcon} />
                <span>(609) 748-6580</span>
                <span className={styles.textBadge}>
                  <FontAwesomeIcon icon={faComment} />
                  Text
                </span>
              </a>
              <a href="tel:7324755342" className={styles.contactItem}>
                <FontAwesomeIcon icon={faPhone} className={styles.contactIcon} />
                <span>(732) 475-5342</span>
                <span className={styles.textBadge}>
                  <FontAwesomeIcon icon={faComment} />
                  Text
                </span>
              </a>
              <a href="mailto:drmechanicalllc@gmail.com" className={styles.contactItem}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.contactIcon} />
                <span>drmechanicalllc@gmail.com</span>
              </a>
              <div className={styles.contactItem}>
                <FontAwesomeIcon icon={faLocationDot} className={styles.contactIcon} />
                <span>Atlantic & Cape May County, NJ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} D.R. Mechanical Heating Cooling Refrigeration LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
