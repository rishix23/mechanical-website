import Image from "next/image";
import styles from "../styles/page.module.css";
import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my website!</p>
      <h3>
        <Link href="/about">
          <p>About Us Page</p>
        </Link>
      </h3>
      <h3>
        <Link href="/contact">
          <p>Contact Us</p>
        </Link>
      </h3>
    </div>
  );
}

export default Home;
