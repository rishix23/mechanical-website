import styles from "./section.module.css";

const Section = ({ children, className }) => {
  return <div className={`${styles.section} ${styles.container} ${className}`}>{children}</div>;
};

export default Section;
