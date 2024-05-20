import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={`${styles.banner} container`}>
      <p>
        Offering 24/7 Service. Call Us Anytime: <a href="tel:+1234567890">+1 (234) 567-890</a>
      </p>
    </div>
  );
};

export default Banner;
