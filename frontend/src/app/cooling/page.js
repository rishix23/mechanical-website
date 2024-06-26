// pages/cooling/page.js

import Head from "next/head";
import Section from "../../components/section/section";
import styles from "./cooling.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake, faWind, faTools } from "@fortawesome/free-solid-svg-icons";
import ClientWrapper from "../../components/ClientWrapper/ClientWrapper";

export default function Cooling() {
  return (
    <>
      <Head>
        <title>Cooling Services</title>
      </Head>
      <Section className={`${styles.hero} container`}>
        <div className={styles.heroContent}>
          <Image src="/cooling.webp" alt="Cooling Services" priority layout="fill" objectFit="cover" className={styles.heroImage} />
          <div className={styles.overlay}>
            <h1>Stay Cool with Our Top-Notch Cooling Services</h1>
            <p>Professional air-conditioning services for your home and business.</p>
          </div>
        </div>
      </Section>
      <ClientWrapper serviceBoxClass={styles.serviceBox} visibleClass={styles.visible}>
        <Section className="container section">
          <div className={styles.services}>
            <div className={styles.serviceBox}>
              <FontAwesomeIcon icon={faSnowflake} className={styles.icon} />
              <h2>Comprehensive Cooling Services</h2>
              <p>
                Is your air-conditioning on the fritz? We service all makes and models to keep the summer heat out of your home or business. We offer sales, service, installation, and maintenance
                contracts for your peace of mind.
              </p>
            </div>
            <div className={styles.serviceBox}>
              <FontAwesomeIcon icon={faWind} className={styles.icon} />
              <h2>Energy-Efficient Solutions</h2>
              <p>
                Our energy-efficient systems save you money. Many of our systems come with 10-year limited-parts warranties and lifetime warranties on compressors. Stay cool and save money with our
                top-notch solutions.
              </p>
            </div>
            <div className={styles.serviceBox}>
              <FontAwesomeIcon icon={faTools} className={styles.icon} />
              <h2>Expert Technicians</h2>
              <p>We offer high-quality products and have the experience to work with all major brands. Our skilled technicians ensure your system is always in top condition, helping you stay cool.</p>
            </div>
          </div>
        </Section>
      </ClientWrapper>
    </>
  );
}
