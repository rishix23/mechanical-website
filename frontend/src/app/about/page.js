"use client";

import Head from "next/head";
import styles from "./about.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faUsers,
  faShieldAlt,
  faCheckCircle,
  faPhone,
  faClock,
  faHandshake,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  const handleQuoteOnClick = () => {
    router.push("/contact");
  };

  return (
    <>
      <Head>
        <title>About Us | D.R. Mechanical</title>
        <meta name="description" content="Learn about D.R. Mechanical - South Jersey's trusted HVAC experts since 2006. Licensed, insured, and dedicated to your comfort." />
      </Head>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot}></span>
            Trusted Since 2006
          </div>
          <h1 className={styles.heroTitle}>
            Your <span className={styles.heroHighlight}>Local HVAC</span> Experts
          </h1>
          <p className={styles.heroSubtitle}>
            Family-owned and operated, serving Atlantic and Cape May County with professional heating, cooling, and refrigeration services for over 18 years.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className={styles.storyContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Our Story</span>
            <h2 className={styles.sectionTitle}>Built on Trust & Quality</h2>
          </div>
          <div className={styles.storyContent}>
            <p>
              D.R. Mechanical Heating Cooling Refrigeration LLC was founded in 2006 with a simple mission: provide honest, reliable HVAC services to South Jersey families and businesses. Located in Galloway, New Jersey, we've grown from a small local operation to one of the most trusted names in HVAC throughout Atlantic and Cape May County.
            </p>
            <p>
              Whether it's the frigid cold of winter or the dog days of summer, we've been keeping our community comfortable for over 18 years. Our commitment to professional service, transparent pricing, and customer satisfaction has earned us hundreds of five-star reviews and countless loyal customers.
            </p>
            <p>
              We're not just another HVAC company—we're your neighbors. We understand the unique climate challenges of South Jersey, and we're available 24/7 to ensure your comfort is never compromised.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Our Values</span>
            <h2 className={styles.sectionTitle}>What Sets Us Apart</h2>
          </div>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <h3>Honest Service</h3>
              <p>No hidden costs, no upselling. Just honest work at fair prices with transparent quotes.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FontAwesomeIcon icon={faClock} />
              </div>
              <h3>24/7 Availability</h3>
              <p>HVAC emergencies don't wait for business hours. Neither do we. Call us anytime.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3>Expert Technicians</h3>
              <p>Our team is fully licensed, insured, and continuously trained on the latest HVAC technology.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FontAwesomeIcon icon={faStar} />
              </div>
              <h3>Quality Guaranteed</h3>
              <p>We stand behind our work with a satisfaction guarantee. If you're not happy, we make it right.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className={styles.credentialsSection}>
        <div className={styles.credentialsContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Credentials</span>
            <h2 className={styles.sectionTitle}>Licensed & Fully Insured</h2>
          </div>
          <div className={styles.credentialsGrid}>
            <div className={styles.credentialCard}>
              <FontAwesomeIcon icon={faShieldAlt} className={styles.credentialIcon} />
              <h4>NJ Licensed</h4>
              <p>License #13VH04955300</p>
            </div>
            <div className={styles.credentialCard}>
              <FontAwesomeIcon icon={faAward} className={styles.credentialIcon} />
              <h4>Fully Insured</h4>
              <p>Complete liability coverage</p>
            </div>
            <div className={styles.credentialCard}>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.credentialIcon} />
              <h4>18+ Years</h4>
              <p>Serving South Jersey</p>
            </div>
          </div>
          <div className={styles.licenseInfo}>
            <p>Insured and Licensed - NJ License #13VH04955300</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Experience the D.R. Mechanical Difference</h2>
          <p className={styles.ctaSubtitle}>Join hundreds of satisfied customers throughout South Jersey.</p>
          <div className={styles.ctaButtons}>
            <button className={styles.btnPrimary} onClick={handleQuoteOnClick}>
              Get Free Quote
              <span className={styles.btnArrow}>→</span>
            </button>
            <a href="tel:6097482919" className={styles.btnSecondary}>
              <FontAwesomeIcon icon={faPhone} className={styles.btnPhoneIcon} />
              (609) 748-2919
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
