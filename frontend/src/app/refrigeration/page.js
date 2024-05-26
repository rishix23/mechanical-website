"use client";

import Head from "next/head";
import { useEffect } from "react";
import Section from "../../components/section/section";
import styles from "./refrigeration.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer, faGauge, faTruck } from "@fortawesome/free-solid-svg-icons";

export default function Refrigeration() {
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
    <>
      <Head>
        <title>Commercial Refrigeration</title>
      </Head>
      <Section className={`${styles.hero} container`}>
        <div className={styles.heroContent}>
          <Image src="/refrigeration.webp" loading="lazy" alt="Commercial Refrigeration" layout="fill" objectFit="cover" className={styles.heroImage} />
          <div className={styles.overlay}>
            <h1>Reliable Commercial Refrigeration Services</h1>
            <p>Ensuring your food remains at the perfect temperature all the time.</p>
          </div>
        </div>
      </Section>
      <Section className="container section">
        <div className={styles.services}>
          <div className={styles.serviceBox}>
            <FontAwesomeIcon icon={faHammer} className={styles.icon} />
            <h2>Preventative Maintenance</h2>
            <p>Prevent walk-in refrigeration issues with our preventative maintenance contracts. We ensure your food products are safe from temperature fluctuations.</p>
          </div>
          <div className={styles.serviceBox}>
            <FontAwesomeIcon icon={faGauge} className={styles.icon} />
            <h2>Temperature Monitoring</h2>
            <p>Maintain the proper temperature for all of your refrigerated food and beverages. Our systems alert you to issues before they become critical.</p>
          </div>
          <div className={styles.serviceBox}>
            <FontAwesomeIcon icon={faTruck} className={styles.icon} />
            <h2>Sales and Installation</h2>
            <p>From sales and service to installation, we provide cost-effective, energy-efficient solutions for all of your commercial refrigeration needs.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
