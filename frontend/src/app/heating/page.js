import Head from "next/head";
import Section from "../../components/section/section";
import styles from "./heating.module.css";
import Image from "next/image";

export default function Heating() {
  return (
    <>
      <Head>
        <title>Heating Services</title>
      </Head>
      <Section className="container">
        <div className={styles.header}>
          <h1>Heating Services</h1>
          <p>
            Just because it's cold outside does not mean it has to feel cold inside your home or business establishment. Stay warm in the winter with assistance from our company. Our heating services
            will fulfill your needs.
          </p>
        </div>
      </Section>
      <Section className="container section">
        <div className={styles.services}>
          <div className={styles.serviceBox}>
            <Image alt="Heating Service" width={300} height={200} />
            <h2>Comprehensive Heating Services</h2>
            <p>
              You may feel a bit hesitant to run your heater because you remember hearing a funny noise the last time you used it. Allow us to identify any problems it may be having. We provide sales,
              service, and installation of complete heating systems and furnaces for your home or business.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <Image alt="Energy Efficient Heating" width={300} height={200} />
            <h2>Energy-Efficient Solutions</h2>
            <p>
              You'll receive a warm feeling when you see our trucks drive up, and by the time we're done, you'll be putting away those extra blankets. Don't let your old furnace waste energy and run
              up your heating costs. We boost its efficiency while saving you money.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <Image alt="Expert Technicians" width={300} height={200} />
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
