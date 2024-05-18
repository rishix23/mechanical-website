import Head from "next/head";
import Section from "../components/section/section.js";
import styles from "../styles/page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake, faFire, faIndustry } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <Section className="container">
        <Head>
          <title>Home</title>
        </Head>
        <h1>Home</h1>
        <p>This is the home page</p>
      </Section>
      <Section className="container section">
        <div className={styles.services}>
          <div className={styles.serviceBox}>
            <FontAwesomeIcon icon={faSnowflake} className={styles.serviceIcon} />
            <p>
              Air-Conditioning Services When you need fresh, cool air in your living space, contact D.R. Mechanical Heating, Cooling & Refrigeration, LLC. We provide air-conditioning services that
              include repairs, maintenance, and installation for residential and commercial customers.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <FontAwesomeIcon icon={faFire} className={styles.serviceIcon} />
            <p>
              Heating Services Heat your home or business by letting our HVAC company provide heating services. Whether you need repairs or installation services, our skilled team can address any of
              your heating needs.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <FontAwesomeIcon icon={faIndustry} className={styles.serviceIcon} />
            <p>
              Commercial Refrigeration It is very important that you have a refrigerator, freezer, or walk-in cooler that works. Do not let your food spoil when we can ensure that it stays cool and
              fresh.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
