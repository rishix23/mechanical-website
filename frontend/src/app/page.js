"use client";

import Head from "next/head";
import styles from "../styles/page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSnowflake, faFire, faClipboardList, faStore, faWind, faBell, faGift, faPercent, faWrench, faHandshake, faStar, faPhone, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

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

      {/* Trust Bar */}
      <div className={styles.trustBar}>
        <div className={styles.trustItem}>
          <div className={styles.trustIcon}>
            <FontAwesomeIcon icon={faCheck} />
          </div>
          Licensed & Insured
        </div>
        <div className={styles.trustItem}>
          <div className={styles.trustIcon}>
            <FontAwesomeIcon icon={faCheck} />
          </div>
          Free Estimates
        </div>
        <div className={styles.trustItem}>
          <div className={styles.trustIcon}>
            <FontAwesomeIcon icon={faCheck} />
          </div>
          Transparent Pricing
        </div>
        <div className={styles.trustItem}>
          <div className={styles.trustIcon}>
            <FontAwesomeIcon icon={faCheck} />
          </div>
          Veteran & Senior Discounts
        </div>
      </div>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>What We Do</span>
            <h2 className={styles.sectionTitle}>Complete HVAC Solutions</h2>
            <p className={styles.sectionSubtitle}>From emergency repairs to full system installations, we have got your comfort covered.</p>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <FontAwesomeIcon icon={faSnowflake} />
              </div>
              <h3>AC Repair & Installation</h3>
              <p>Reliable cooling service for every brand and system type.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <FontAwesomeIcon icon={faFire} />
              </div>
              <h3>Furnace & Heating</h3>
              <p>Expert repairs and tune-ups to keep you warm all winter.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <FontAwesomeIcon icon={faClipboardList} />
              </div>
              <h3>Maintenance Plans</h3>
              <p>Preventive care to extend system life and prevent breakdowns.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <FontAwesomeIcon icon={faStore} />
              </div>
              <h3>Commercial Refrigeration</h3>
              <p>Fast, dependable service for restaurants and stores.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <FontAwesomeIcon icon={faWind} />
              </div>
              <h3>Ductwork & Air Quality</h3>
              <p>Improve airflow and indoor air health professionally.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <FontAwesomeIcon icon={faBell} />
              </div>
              <h3>24/7 Emergency Service</h3>
              <p>Always on call when you need help most. Day or night.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className={styles.offersSection}>
        <div className={styles.offersContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Save More</span>
            <h2 className={styles.sectionTitle}>Special Offers</h2>
          </div>
          <div className={styles.offersGrid}>
            <div className={styles.offerCard}>
              <div className={styles.offerIcon}>
                <FontAwesomeIcon icon={faGift} />
              </div>
              <h3>Free Estimates</h3>
              <p>On all repairs and installations</p>
              <span className={styles.offerValue}>$0</span>
            </div>
            <div className={styles.offerCard}>
              <div className={styles.offerIcon}>
                <FontAwesomeIcon icon={faPercent} />
              </div>
              <h3>First Service Discount</h3>
              <p>New customers save big</p>
              <span className={styles.offerValue}>10% OFF</span>
            </div>
            <div className={styles.offerCard}>
              <div className={styles.offerIcon}>
                <FontAwesomeIcon icon={faWrench} />
              </div>
              <h3>Installation Savings</h3>
              <p>Any new system installation</p>
              <span className={styles.offerValue}>$50 OFF</span>
            </div>
            <div className={styles.offerCard}>
              <div className={styles.offerIcon}>
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <h3>Referral Bonus</h3>
              <p>Refer a friend, get rewarded</p>
              <span className={styles.offerValue}>FREE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Reviews</span>
            <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
          </div>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <blockquote className={styles.testimonialQuote}>
                Excellent, professional, fast service — highly recommend D.R. Mechanical! They arrived within an hour and had our AC running perfectly.
              </blockquote>
              <div className={styles.testimonialAuthor}>— Verified Google Review</div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <blockquote className={styles.testimonialQuote}>
                Fair pricing, great communication, and honest work every time. They have been our go-to HVAC company for years now.
              </blockquote>
              <div className={styles.testimonialAuthor}>— Verified Google Review</div>
            </div>
          </div>
          <div className={styles.reviewBadge}>
            <FontAwesomeIcon icon={faStar} className={styles.reviewBadgeIcon} />
            <span>Over 100+ Five-Star Reviews on Google</span>
          </div>
        </div>
      </section>

      {/* Coverage Area Section */}
      <section className={styles.coverageSection}>
        <div className={styles.coverageContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Coverage Area</span>
            <h2 className={styles.sectionTitle}>Proudly Serving South Jersey</h2>
          </div>

          <div className={styles.countiesGrid}>
            {/* Atlantic County */}
            <div className={styles.countyCard}>
              <h3 className={styles.countyTitle}>Atlantic County</h3>
              <ul className={styles.locationsList}>
                <li>Absecon</li>
                <li>Atlantic City</li>
                <li>Brigantine</li>
                <li>Buena</li>
                <li>Egg Harbor City</li>
                <li>Egg Harbor Township</li>
                <li>Galloway</li>
                <li>Hamilton Township</li>
                <li>Hammonton</li>
                <li>Linwood</li>
                <li>Longport</li>
                <li>Margate City</li>
                <li>Mullica Township</li>
                <li>Northfield</li>
                <li>Pleasantville</li>
                <li>Port Republic</li>
                <li>Somers Point</li>
                <li>Ventnor City</li>
              </ul>
            </div>

            {/* Cape May County */}
            <div className={styles.countyCard}>
              <h3 className={styles.countyTitle}>Cape May County</h3>
              <ul className={styles.locationsList}>
                <li>Avalon</li>
                <li>Cape May</li>
                <li>Cape May Court House</li>
                <li>Cape May Point</li>
                <li>Dennis Township</li>
                <li>Lower Township</li>
                <li>Middle Township</li>
                <li>North Wildwood</li>
                <li>Ocean City</li>
                <li>Sea Isle City</li>
                <li>Stone Harbor</li>
                <li>Upper Township</li>
                <li>West Cape May</li>
                <li>West Wildwood</li>
                <li>Wildwood</li>
                <li>Wildwood Crest</li>
                <li>Woodbine</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Get In Touch</span>
              <h2 className={styles.sectionTitle}>Ready to Get Started?</h2>
            </div>
            <p className={styles.contactDescription}>
              Whether you need emergency repairs or a free quote on a new system, our team is here to help. Reach out today!
            </p>
            <div className={styles.phoneNumbers}>
              <a href="tel:6097482919" className={styles.contactPhone}>
                <div className={styles.contactPhoneIcon}>
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <span>(609) 748-2919</span>
              </a>
              <a href="tel:6097426580" className={styles.contactPhone}>
                <div className={styles.contactPhoneIcon}>
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <span>(609) 742-6580</span>
              </a>
              <a href="tel:7324755342" className={styles.contactPhone}>
                <div className={styles.contactPhoneIcon}>
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <span>(732) 475-5342</span>
              </a>
            </div>
            <div className={styles.contactFeatures}>
              <div className={styles.contactFeature}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.contactFeatureIcon} />
                <span>24/7 Emergency</span>
              </div>
              <div className={styles.contactFeature}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.contactFeatureIcon} />
                <span>Free Estimates</span>
              </div>
              <div className={styles.contactFeature}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.contactFeatureIcon} />
                <span>Same-Day Service</span>
              </div>
            </div>
          </div>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="John Smith" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="address">Address or ZIP</label>
              <input type="text" id="address" name="address" placeholder="Your address or ZIP code" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="service">Service Needed</label>
              <select id="service" name="service" required>
                <option value="">Select a service...</option>
                <option value="ac">AC Repair / Installation</option>
                <option value="heating">Heating / Furnace Repair</option>
                <option value="maintenance">Maintenance Plan</option>
                <option value="refrigeration">Commercial Refrigeration</option>
                <option value="ductwork">Ductwork / Air Quality</option>
                <option value="emergency">Emergency Service</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message (Optional)</label>
              <textarea id="message" name="message" placeholder="Tell us how we can help..." rows={3}></textarea>
            </div>
            <button type="submit" className={styles.formSubmit}>Send Request</button>
          </form>
        </div>
      </section>
    </>
  );
}
