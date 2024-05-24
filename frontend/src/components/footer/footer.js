"use client";

import Link from "next/link";
import Image from "next/image";
import GoogleMap from "../map/map";
import styles from "./footer.module.css";
import Logo from "../../../public/logo_old.svg";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

export default function Footer() {
  return (
    <footer className={`${styles.footer} container section`}>
      <div className={styles.footer__box}>
        <Image src={Logo} alt="Logo" layout="intrinsic" className={styles.footer_image} />
      </div>
      <div className={styles.footer__box}>
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
      <div className={styles.footer__box}>
        <GoogleMap />
      </div>
      <div className={styles.footer__box}>
        <h1>Follow Us</h1>
        <div className={styles.footer__box__social__icons}>
          <a href="https://www.facebook.com/drmechanicalllc" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSquareFacebook} className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/tj-walia-6258466a/" target="_blank" rel="noopener noreferrer">
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
