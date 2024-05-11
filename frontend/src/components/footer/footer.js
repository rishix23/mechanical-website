import Link from "next/link";
import styles from "./footer.module.css";
import Logo from "../../../public/favicon.ico";

export default function Footer() {
  return (
    <footer className={styles.footer}>
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
            <Link href="/refrigeration">Refridgeration</Link>
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
      <div className={styles.box}>Google Maps thingy here</div>
    </footer>
  );
}
