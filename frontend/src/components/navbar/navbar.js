"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./navbar.module.css";
import Logo from "../../../public/logo_old.svg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuButtonClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <nav className={`${styles.navbar} container`}>
      <Image src={Logo} alt="Logo" layout="intrinsic" className={styles.navbar__image} />
      <Link className={styles.navbar__link} href="/">
        Home
      </Link>
      <Link className={styles.navbar__link} href="/heating">
        Heating
      </Link>
      <Link className={styles.navbar__link} href="/cooling">
        Cooling
      </Link>
      <Link className={styles.navbar__link} href="/refrigeration">
        Refrigeration
      </Link>
      <Link className={styles.navbar__link} href="/about">
        About Us
      </Link>
      <Link className={styles.navbar__link} href="/contact">
        Contact
      </Link>
      <Link className={styles.navbar__link} href="/photos">
        Photos
      </Link>
      <FontAwesomeIcon icon={faBars} className={styles.navbar__button} onClick={handleMenuButtonClick} />

      {showMenu && (
        <div className={styles.navbar__button__menu}>
          <ul>
            <li>
              <Link href="/" onClick={() => handleLinkClick()}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/heating" onClick={() => handleLinkClick()}>
                Heating
              </Link>
            </li>
            <li>
              <Link href="/cooling" onClick={() => handleLinkClick()}>
                Cooling
              </Link>
            </li>
            <li>
              <Link href="/refrigeration" onClick={() => handleLinkClick()}>
                Refrigeration
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => handleLinkClick()}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => handleLinkClick()}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/photos" onClick={() => handleLinkClick()}>
                Photos
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
