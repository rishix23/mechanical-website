import Link from "next/link";
import styles from "./navbar.module.css";
import Logo from "../../../public/next.svg";

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} container`}>
      <div> {/* Logo here */} </div>
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
      <button className={styles.navbar__button} aria-label="Icon button">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </nav>
  );
}

// const Navbar = ({ className }) => {
//   return (
//     <nav className={`${styles.menu} ${className}`}>
//       <div> {/* Logo here */} </div>
//       <ul>
//         <li>
//           <Link href="/">Home</Link>
//         </li>

//         <Link href="/heating">Heating</Link>
//         <Link href="/cooling">Cooling</Link>
//         <Link href="/refrigeration">Refridgeration</Link>
//         <Link href="/about">About Us</Link>
//         <Link href="/contact">Contact</Link>
//         <Link href="/photos">Photos</Link>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
