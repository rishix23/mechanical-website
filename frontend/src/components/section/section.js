import styles from "./section.module.css";

const Section = ({ children, className }) => {
  return <div className={`${styles.section} ${className}`}>{children}</div>;
};

export default Section;
