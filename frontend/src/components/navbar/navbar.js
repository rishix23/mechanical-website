"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";
import Logo from "../../../public/Logo.svg";
import { useState } from "react";

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
      <div className={styles.logoContainer}>
        <Image src={Logo} alt="Logo" layout="intrinsic" width={150} height={150} />
      </div>
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
        Refridgeration
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
      <button className={styles.navbar__button} aria-label="Icon button" onClick={handleMenuButtonClick}>
        Menu Button
      </button>

      {showMenu && (
        <div className={styles.navbar__button__menu}>
          <div> {/* Logo here */} </div>
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
                Refridgeration
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
