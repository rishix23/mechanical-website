import Head from "next/head";
import Section from "../../components/section/section";
import styles from "./cooling.module.css";
import Image from "next/image";

export default function Cooling() {
  return (
    <>
      <Head>
        <title>Cooling Services</title>
      </Head>
      <Section className="container">
        <div className={styles.header}>
          <h1>Cooling Services</h1>
          <p>
            Beat the heat of summer by turning to our HVAC contractor in Galloway, New Jersey, for affordable air-conditioning services. Our skilled technicians inspect your cooling system to make
            sure it's in perfect working condition.
          </p>
        </div>
      </Section>
      <Section className="container section">
        <div className={styles.services}>
          <div className={styles.serviceBox}>
            <Image alt="Cooling Service" width={300} height={200} />
            <h2>Comprehensive Cooling Services</h2>
            <p>
              Is your air-conditioning on the fritz? We service all makes and models that keep the summer heat out of your home or business. We offer sales, service, installation, and maintenance
              contracts for your peace of mind.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <Image alt="Energy Efficient Cooling" width={300} height={200} />
            <h2>Energy-Efficient Solutions</h2>
            <p>
              Our energy-efficient systems are money savers too. Many of our systems come with 10-year or more, limited-parts warranties, as well as lifetime warranties on the compressors. Stay cool
              and save money with our top-notch solutions.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <Image alt="Expert Technicians" width={300} height={200} />
            <h2>Expert Technicians</h2>
            <p>
              While we are proud to offer high-quality products, we also have the experience to work with all major brands. Our skilled technicians know how to help you stay cool and ensure your
              system is always in top condition.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
