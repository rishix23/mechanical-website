"use client";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/page.module.css";
import Carousel from "../components/carousel/carousel";
import Section from "../components/section/section.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan, faIcicles, faTemperatureFull } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import ClientWrapper from "@/components/ClientWrapper/ClientWrapper";
import AreasWeServe from "../components/areas/areas";

export default function Home() {
  const router = useRouter();

  const handleQuoteOnClick = () => {
    router.push("/contact");
  };

  return (
    <>
      <Head>
        <title>D.R Mechanical Heating Cooling Refrigeration LLC</title>
        <meta name="description" content="HVAC Contractor and HVAC Services serving all of Atlantic and Cape May County. Fire, EMT, Senior Citizens, and Veterans Discounts available." />
      </Head>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot}></span>
            24/7 Emergency Service Available
          </div>
          <h1 className={styles.heroTitle}>
            Expert HVAC Service for <span className={styles.heroHighlight}>South Jersey</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Professional heating, cooling, and refrigeration solutions. Serving Atlantic and Cape May County with trusted local experience.
          </p>
          <div className={styles.heroCtas}>
            <button className={styles.btnPrimary} onClick={handleQuoteOnClick}>
              Get Free Quote
              <span className={styles.btnArrow}>→</span>
            </button>
            <a href="tel:6097482919" className={styles.btnSecondary}>
              <span className={styles.btnPhoneIcon}>📞</span>
              Call Now
            </a>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>18<span>+</span></div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>100<span>+</span></div>
              <div className={styles.statLabel}>5-Star Reviews</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>24<span>/7</span></div>
              <div className={styles.statLabel}>Emergency Service</div>
            </div>
          </div>
        </div>
        <p className={styles.heroDiscount}>Fire, EMT, Senior Citizens, and Veterans Discounts available</p>
      </section>

      {/* Carousel Section */}
      <Section className="container section">
        <Carousel />
      </Section>

      {/* Areas We Serve Section */}
      <AreasWeServe />

      <ClientWrapper serviceBoxClass={styles.serviceBox} visibleClass={styles.visible}>
        <Section className="container section">
          <div className={styles.services}>
            <div className={styles.serviceBox}>
              <FontAwesomeIcon icon={faFan} className={styles.icon} />
              <h2>Air Conditioning</h2>
              <p>
                When you need fresh, cool air in your living space, contact D.R. Mechanical Heating, Cooling & Refrigeration, LLC. We provide air-conditioning services that include repairs,
                maintenance, and installation for residential and commercial customers.
              </p>
            </div>
            <div className={styles.serviceBox}>
              <FontAwesomeIcon icon={faTemperatureFull} className={styles.icon} />
              <h2>Heating Services</h2>
              <p>
                Heat your home or business by letting our HVAC company provide heating services. Whether you need repairs or installation services, our skilled team can address any of your heating
                needs.
              </p>
            </div>
            <div className={styles.serviceBox}>
              <FontAwesomeIcon icon={faIcicles} className={styles.icon} />
              <h2>Commercial Refrigeration</h2>
              <p>It is very important that you have a refrigerator, freezer, or walk-in cooler that works. Do not let your food spoil when we can ensure that it stays cool and fresh.</p>
            </div>
          </div>
        </Section>
      </ClientWrapper>
    </>
  );
}
