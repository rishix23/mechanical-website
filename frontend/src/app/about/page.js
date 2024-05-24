import Head from "next/head";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About Us - D.R Mechanical</title>
        <meta name="description" content="About D.R Mechanical Heating Cooling Refrigeration LLC." />
      </Head>
      <section className={styles.aboutUs}>
        <h1>About Us</h1>
        <p>
          D.R Mechanical Heating Cooling Refrigeration LLC. was founded in 2006. We are located in Galloway, New Jersey. We serve Atlantic County and Cape May County residents and commercial
          businesses with heating and cooling services. We ensure that you are comfortable in any weather by providing comprehensive HVAC services. Whether it is the frigid cold of winter or the dog
          days of summer, we keep the temperature perfect for your place.
        </p>
        <p>
          We guarantee professional and same-day installation with no hidden costs. We are a licensed and fully insured company and are available to you 24/7. Feel free to give us a call today for a
          free quote. We are confident that you will be satisfied with our services. If you are not satisfied we offer you your money back guaranteed.
        </p>
      </section>
      <section className={`${styles.businessInfo} container`}>
        <p>Insured and Licensed - NJ License #13VH04955300</p>
        <p>BBB</p>
      </section>
    </div>
  );
}
