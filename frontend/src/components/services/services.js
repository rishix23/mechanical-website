"use client";

import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan, faIcicles, faTemperatureFull } from "@fortawesome/free-solid-svg-icons";
import styles from "./services.module.css";

export default function Services() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Element is in view:", entry.target);
          entry.target.classList.add(styles.visible);
        }
      });
    });

    const elements = document.querySelectorAll(`.${styles.serviceBox}`);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.services}>
      <div className={styles.serviceBox}>
        <FontAwesomeIcon icon={faFan} className={styles.icon} />
        <h2>Air Conditioning</h2>
        <p>
          When you need fresh, cool air in your living space, contact D.R. Mechanical Heating, Cooling & Refrigeration, LLC. We provide air-conditioning services that include repairs, maintenance, and
          installation for residential and commercial customers.
        </p>
      </div>
      <div className={styles.serviceBox}>
        <FontAwesomeIcon icon={faTemperatureFull} className={styles.icon} />
        <h2>Heating Services</h2>
        <p>
          Heat your home or business by letting our HVAC company provide heating services. Whether you need repairs or installation services, our skilled team can address any of your heating needs.
        </p>
      </div>
      <div className={styles.serviceBox}>
        <FontAwesomeIcon icon={faIcicles} className={styles.icon} />
        <h2>Commercial Refrigeration</h2>
        <p>It is very important that you have a refrigerator, freezer, or walk-in cooler that works. Do not let your food spoil when we can ensure that it stays cool and fresh.</p>
      </div>
    </div>
  );
}
