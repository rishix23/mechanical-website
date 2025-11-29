"use client";

import Head from "next/head";
import styles from "./refrigeration.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSnowflake,
  faStore,
  faGauge,
  faTools,
  faTruck,
  faCheckCircle,
  faPhone,
  faCheck,
  faTemperatureHalf,
  faBell
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function Refrigeration() {
  const router = useRouter();

  const handleQuoteOnClick = () => {
    router.push("/contact");
  };

  return (
    <>
      <Head>
        <title>Commercial Refrigeration | D.R. Mechanical</title>
        <meta name="description" content="Professional commercial refrigeration services in South Jersey. Walk-in coolers, freezers, and refrigeration repair. 24/7 emergency service for restaurants and businesses." />
      </Head>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot}></span>
            Commercial Refrigeration Experts
          </div>
          <h1 className={styles.heroTitle}>
            Keep Your Business <span className={styles.heroHighlight}>Running Cold</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Expert commercial refrigeration services for restaurants, stores, and businesses. From walk-in coolers to display cases, we keep your products at the perfect temperature.
          </p>
          <div className={styles.heroCtas}>
            <button className={styles.btnPrimary} onClick={handleQuoteOnClick}>
              Get Free Quote
              <span className={styles.btnArrow}>→</span>
            </button>
            <a href="tel:6097482919" className={styles.btnSecondary}>
              <FontAwesomeIcon icon={faPhone} className={styles.btnPhoneIcon} />
              Emergency Call
            </a>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>500<span>+</span></div>
              <div className={styles.statLabel}>Businesses Served</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>24<span>/7</span></div>
              <div className={styles.statLabel}>Emergency Service</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>Fast<span> Fix</span></div>
              <div className={styles.statLabel}>Rapid Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className={styles.trustBar}>
        <div className={styles.trustItem}>
          <FontAwesomeIcon icon={faCheck} className={styles.trustIcon} />
          Licensed & Insured
        </div>
        <div className={styles.trustItem}>
          <FontAwesomeIcon icon={faCheck} className={styles.trustIcon} />
          All Major Brands
        </div>
        <div className={styles.trustItem}>
          <FontAwesomeIcon icon={faCheck} className={styles.trustIcon} />
          24/7 Emergency
        </div>
        <div className={styles.trustItem}>
          <FontAwesomeIcon icon={faCheck} className={styles.trustIcon} />
          Commercial Focus
        </div>
      </div>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Our Services</span>
            <h2 className={styles.sectionTitle}>Complete Refrigeration Solutions</h2>
            <p className={styles.sectionSubtitle}>Professional refrigeration services to keep your business running smoothly.</p>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <FontAwesomeIcon icon={faSnowflake} />
              </div>
              <h3>Walk-In Coolers & Freezers</h3>
              <p>Expert repair and maintenance for walk-in refrigeration units of all sizes.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <FontAwesomeIcon icon={faStore} />
              </div>
              <h3>Display Cases</h3>
              <p>Service and repair for retail display cases and merchandising refrigerators.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <FontAwesomeIcon icon={faGauge} />
              </div>
              <h3>Temperature Monitoring</h3>
              <p>Advanced monitoring systems to maintain proper food safety temperatures.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <FontAwesomeIcon icon={faTools} />
              </div>
              <h3>Preventive Maintenance</h3>
              <p>Regular maintenance contracts to prevent costly breakdowns and downtime.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <FontAwesomeIcon icon={faTruck} />
              </div>
              <h3>Sales & Installation</h3>
              <p>Complete sales, installation, and setup of commercial refrigeration equipment.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <FontAwesomeIcon icon={faBell} />
              </div>
              <h3>Emergency Repairs</h3>
              <p>24/7 emergency service to minimize downtime and protect your inventory.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whySection}>
        <div className={styles.whyContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Why Us</span>
            <h2 className={styles.sectionTitle}>Commercial Refrigeration Specialists</h2>
          </div>
          <p className={styles.whyDescription}>
            When your refrigeration fails, every minute counts. D.R. Mechanical specializes in commercial refrigeration with rapid response times and expert technicians who understand the urgency of keeping your business running.
          </p>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.whyCardIcon} />
              <h4>Commercial Expertise</h4>
              <p>Specialized in business refrigeration needs</p>
            </div>
            <div className={styles.whyCard}>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.whyCardIcon} />
              <h4>Rapid Response</h4>
              <p>Emergency service to minimize downtime</p>
            </div>
            <div className={styles.whyCard}>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.whyCardIcon} />
              <h4>All Major Brands</h4>
              <p>Service for all commercial equipment brands</p>
            </div>
            <div className={styles.whyCard}>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.whyCardIcon} />
              <h4>Preventive Care</h4>
              <p>Maintenance plans to prevent failures</p>
            </div>
          </div>
          <button className={styles.btnPrimary} onClick={handleQuoteOnClick}>
            Request Service
            <span className={styles.btnArrow}>→</span>
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Refrigeration Emergency?</h2>
          <p className={styles.ctaSubtitle}>Call us now for immediate commercial refrigeration service.</p>
          <a href="tel:6097482919" className={styles.ctaPhone}>
            <FontAwesomeIcon icon={faPhone} className={styles.ctaPhoneIcon} />
            (609) 748-2919
          </a>
        </div>
      </section>
    </>
  );
}
