import Link from "next/link";
import styles from "./navbar.module.css";
import Logo from "../../../public/next.svg";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div> {/* Logo here */} </div>
      <Link href="/">Home</Link>
      <Link href="/heating">Heating</Link>
      <Link href="/cooling">Cooling</Link>
      <Link href="/refrigeration">Refridgeration</Link>
      <Link href="/about">About Us</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/photos">Photos</Link>
    </nav>
  );
}
