import Link from "next/link";
import styles from "./footer.module.css";
import Logo from "../../../public/favicon.ico";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Footer() {
  return (
    <footer className={`${styles.footer} container section`}>
      <div className={styles.box}>
        image goes here
        {/* <img src={Logo}></img> */}
      </div>
      <div className={styles.box}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/heating">Heating</Link>
          </li>
          <li>
            <Link href="/cooling">Cooling</Link>
          </li>
          <li>
            <Link href="/refrigeration">Refrigeration</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/photos">Photos</Link>
          </li>
        </ul>
      </div>
      <div className={styles.box}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.662213934594!2d-122.40666305077695!3d37.785834799496076!2m3!1e0!2samerica!3e0!3m2!1sen!2sus!4v1674829137075"
          width="100%"
          height="200"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"></iframe>
      </div>
      <div className={styles.box}>
        <h1>Follow Us</h1>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSquareFacebook} className={styles.icon} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
}
