"use client";

import Head from "next/head";
import { useEffect } from "react";
import Section from "../../components/section/section";
import styles from "./heating.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faFire, faHelmetSafety } from "@fortawesome/free-solid-svg-icons";

export default function Heating() {
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
        <title>Heating Services</title>
      </Head>
      <Section className="container">
        <div className={styles.header}>
          <h1>Heating Services</h1>
          <p>
            Just because its cold outside does not mean it has to feel cold inside your home or business establishment. Stay warm in the winter with assistance from our company. Our heating services
            will fulfill your needs.
          </p>
        </div>
      </Section>
      <Section className="container section">
        <div className={styles.services}>
          <div className={styles.serviceBox}>
            <FontAwesomeIcon icon={faFire} className={styles.icon} />
            <h2>Comprehensive Heating Services</h2>
            <p>
              You may feel a bit hesitant to run your heater because you remember hearing a funny noise the last time you used it. Allow us to identify any problems it may be having. We provide sales,
              service, and installation of complete heating systems and furnaces for your home or business.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <FontAwesomeIcon icon={faBolt} className={styles.icon} />
            <h2>Energy-Efficient Solutions</h2>
            <p>
              Youll receive a warm feeling when you see our trucks drive up, and by the time were done, youll be putting away those extra blankets. Dont let your old furnace waste energy and run up
              your heating costs. We boost its efficiency while saving you money.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <FontAwesomeIcon icon={faHelmetSafety} className={styles.icon} />
            <h2>Expert Technicians</h2>
            <p>
              Our skilled technicians have the experience to work with all major brands. We ensure your heating system is always in top condition, providing you with peace of mind during the colder
              months.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
