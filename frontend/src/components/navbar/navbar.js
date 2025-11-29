"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { faBars, faXmark, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuButtonClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logoLink}>
          <Image src="/logo.png" alt="D.R. Mechanical Logo" width={180} height={50} priority className={styles.navLogo} />
        </Link>

        <div className={styles.navLinks}>
          <Link className={styles.navLink} href="/">Home</Link>
          <Link className={styles.navLink} href="/heating">Heating</Link>
          <Link className={styles.navLink} href="/cooling">Cooling</Link>
          <Link className={styles.navLink} href="/refrigeration">Refrigeration</Link>
          <Link className={styles.navLink} href="/about">About</Link>
          <Link className={styles.navLink} href="/contact">Contact</Link>
          <Link className={styles.navLink} href="/photos">Photos</Link>
        </div>

        <a href="tel:6097482919" className={styles.navCta}>
          <FontAwesomeIcon icon={faPhone} className={styles.navCtaIcon} />
          <span className={styles.navCtaText}>(609) 748-2919</span>
        </a>

        <button className={styles.menuButton} onClick={handleMenuButtonClick} aria-label="Toggle menu">
          <FontAwesomeIcon icon={showMenu ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${showMenu ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.mobileMenuContent}>
          <Link href="/" onClick={handleLinkClick} className={styles.mobileLink}>Home</Link>
          <Link href="/heating" onClick={handleLinkClick} className={styles.mobileLink}>Heating</Link>
          <Link href="/cooling" onClick={handleLinkClick} className={styles.mobileLink}>Cooling</Link>
          <Link href="/refrigeration" onClick={handleLinkClick} className={styles.mobileLink}>Refrigeration</Link>
          <Link href="/about" onClick={handleLinkClick} className={styles.mobileLink}>About</Link>
          <Link href="/contact" onClick={handleLinkClick} className={styles.mobileLink}>Contact</Link>
          <Link href="/photos" onClick={handleLinkClick} className={styles.mobileLink}>Photos</Link>
          <a href="tel:6097482919" className={styles.mobilePhone}>
            <FontAwesomeIcon icon={faPhone} />
            <span>(609) 748-2919</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
