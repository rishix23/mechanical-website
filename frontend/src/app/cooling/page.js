"use client";

import Head from "next/head";
import styles from "./cooling.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSnowflake,
  faWind,
  faThermometerHalf,
  faTools,
  faBolt,
  faCheckCircle,
  faPhone,
  faCheck,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function Cooling() {
  const router = useRouter();

  const handleQuoteOnClick = () => {
    router.push("/contact");
  };

  return (
    <>
      <Head>
        <title>Cooling Services | D.R. Mechanical</title>
        <meta name="description" content="Professional cooling and AC services in South Jersey. Air conditioning repair, installation, and maintenance. 24/7 emergency service available." />
      </Head>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot}></span>
            Professional Cooling Solutions
          </div>
          <h1 className={styles.heroTitle}>
            Stay <span className={styles.heroHighlight}>Cool</span> All Summer
          </h1>
          <p className={styles.heroSubtitle}>
            Expert cooling and air conditioning services for your home or business. From AC repairs to complete system installations, we keep South Jersey comfortable.
          </p>
          <div className={styles.heroCtas}>
            <button className={styles.btnPrimary} onClick={handleQuoteOnClick}>
              Get Free Quote
              <span className={styles.btnArrow}>→</span>
            </button>
            <a href="tel:6097482919" className={styles.btnSecondary}>
              <FontAwesomeIcon icon={faPhone} className={styles.btnPhoneIcon} />
              Call Now
            </a>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>2000<span>+</span></div>
              <div className={styles.statLabel}>AC Units Serviced</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>Same<span> Day</span></div>
              <div className={styles.statLabel}>Service Available</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>10<span>yr</span></div>
              <div className={styles.statLabel}>Warranty Options</div>
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
          Free Estimates
        </div>
      </div>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Our Services</span>
            <h2 className={styles.sectionTitle}>Complete Cooling Solutions</h2>
            <p className={styles.sectionSubtitle}>From emergency repairs to complete installations, we keep you cool all season long.</p>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <FontAwesomeIcon icon={faSnowflake} />
              </div>
              <h3>AC Repair</h3>
              <p>Fast, reliable repairs for all air conditioning types and brands. Get cool air fast.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <FontAwesomeIcon icon={faThermometerHalf} />
              </div>
              <h3>System Installation</h3>
              <p>Professional installation of high-efficiency cooling systems for optimal comfort.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <FontAwesomeIcon icon={faBolt} />
              </div>
              <h3>Energy Efficiency</h3>
              <p>Upgrade to energy-efficient systems and save on cooling costs all summer long.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <FontAwesomeIcon icon={faTools} />
              </div>
              <h3>Maintenance</h3>
              <p>Preventive maintenance to extend system life and prevent costly breakdowns.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <FontAwesomeIcon icon={faWind} />
              </div>
              <h3>Ductwork & Airflow</h3>
              <p>Expert ductwork services to ensure optimal airflow throughout your space.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <FontAwesomeIcon icon={faCog} />
              </div>
              <h3>Emergency Service</h3>
              <p>Available 24/7 for cooling emergencies when you need us most.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whySection}>
        <div className={styles.whyContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Why Us</span>
            <h2 className={styles.sectionTitle}>Trusted Cooling Experts</h2>
          </div>
          <p className={styles.whyDescription}>
            When the heat hits, you need a team you can trust. D.R. Mechanical has been keeping South Jersey cool for over 18 years with honest service and expert AC repairs.
          </p>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.whyCardIcon} />
              <h4>18+ Years Experience</h4>
              <p>Decades of trusted service in South Jersey</p>
            </div>
            <div className={styles.whyCard}>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.whyCardIcon} />
              <h4>Same-Day Service</h4>
              <p>Fast response when you need it most</p>
            </div>
            <div className={styles.whyCard}>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.whyCardIcon} />
              <h4>Transparent Pricing</h4>
              <p>Upfront quotes with no hidden fees</p>
            </div>
            <div className={styles.whyCard}>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.whyCardIcon} />
              <h4>Veteran & Senior Discounts</h4>
              <p>Special rates for those who served</p>
            </div>
          </div>
          <button className={styles.btnPrimary} onClick={handleQuoteOnClick}>
            Schedule Service
            <span className={styles.btnArrow}>→</span>
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Need Cooling Service?</h2>
          <p className={styles.ctaSubtitle}>Call us now for fast, reliable AC repairs and installations.</p>
          <a href="tel:6097482919" className={styles.ctaPhone}>
            <FontAwesomeIcon icon={faPhone} className={styles.ctaPhoneIcon} />
            (609) 748-2919
          </a>
        </div>
      </section>
    </>
  );
}
