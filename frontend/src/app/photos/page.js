"use client";

import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./photos.module.css";

const photos = [
  {
    src: "/Site Files/img1.jpg",
    blurDataURL: "data:webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADwAQCdASoMABAABUB8JYwCdAD5cukNmyAA/rCsbxI6USWbx8iR6uf9c3qkgV9opb8tEa4HSultb9MKQ8+wAA==",
  },
  {
    src: "/Site Files/img2.jpg",
    blurDataURL: "data:webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAQCdASoMABAABUB8JZAAAsb4nCGQAAD3yyXBKOFMnd5ElZCHURmOGyR9Vg6gf66RGTlbYEPT0LbTWUYfwVXxu7xhIAAA",
  },
  {
    src: "/Site Files/img3.jpg",
    blurDataURL: "data:webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAQCdASoMABAABUB8JbAC7ACR5sNEAAD9zYP5DHuRFwdPILQs1y1q5yTrts/K9VwtC1ML4WVaTq+sO+Z7kzeRBcrDjGAA",
  },
  {
    src: "/Site Files/img4.jpg",
    blurDataURL: "data:webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADwAQCdASoMABAABUB8JZgCdADc5JOxOwAA/DFrGGrDLkrex7q5dtj77w2QROk5g6nAAWWTwusd+PuI55XhGKYw3uYQAA==",
  },
  {
    src: "/Site Files/img5.jpg",
    blurDataURL: "data:webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoQAAwABUB8JZgAAuhNCeZnUAD7mbQUX3CgvMPnFRWvi5oQgT4Tq38Jz5o7hPV2ju3OrKgEPkwC45UxpSRicjV1gAA=",
  },
  {
    src: "/Site Files/img6.jpg",
    blurDataURL: "data:webp;base64,UklGRk4AAABXRUJQVlA4IEIAAAAQAgCdASoMABAABUB8JZQCdAD1fYYmOBAAAP6x1UhWyh9iJ1HHGp1pGHoYTmP9SBFYHQ8+c9G8jrH8L+14V3eWgAA=",
  },
  {
    src: "/Site Files/img7.jpg",
    blurDataURL: "data:webp;base64,UklGRmYAAABXRUJQVlA4IFoAAADQAQCdASoQAAwABUB8JQBOgB3yakylMAD0cwKhRoxm6AyZO+bRAkepjJ7e+qf5SzuKOk3fv5c87dEBbLJjCYYbVI4CAaeeYubNYP0nMiMQVOQSd9GAVjfAAAA=",
  },
  {
    src: "/Site Files/img8.jpg",
    blurDataURL: "data:webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADwAQCdASoMABAABUB8JQBYdh9m8TZxGPgA/KxW/Hn26Wvmu2Eptlg2GrBu3cId0Zm4t6QLCKCAAA==",
  },
  {
    src: "/Site Files/img9.jpg",
    blurDataURL: "data:webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAQCdASoMABAABUB8JQBWAB9h1PHRgAD7GPQxX1TMP7yBH+EEFOtPpFU+Rs8jDzE3pVedyG1PQqAkNotlnJKeAACJYqAA",
  },
  {
    src: "/Site Files/img10.jpg",
    blurDataURL: "data:webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoMABAABUB8JQBOgBefybjZQAD8jnA6ORgqRktB62Nl+/spfex8nYD6rcPSVNwNXE+ASgthWaGSi2sedkAAAA==",
  },
  {
    src: "/Site Files/img11.jpg",
    blurDataURL: "data:webp;base64,UklGRkgAAABXRUJQVlA4IDwAAAAQAgCdASoMABAABUB8JYwCdAD5jWShhi4AAP6wrG8SO/BD//3mIIpHtqhIhHVlWVha3KyqaPovEqirAAA=",
  },
  {
    src: "/Site Files/img12.jpg",
    blurDataURL: "data:webp;base64,UklGRk4AAABXRUJQVlA4IEIAAAAQAgCdASoMABAABUB8JQBWABh2azTAWAAAAP07NrXsasFPwTQCA6EldCbEHmKg/LRJPi7NkJTPsgBvrJKAzSl+iAA=",
  },
  {
    src: "/Site Files/img13.jpg",
    blurDataURL: "data:webp;base64,UklGRkoAAABXRUJQVlA4ID4AAABwAQCdASoMABAABUB8JaAAAlLKgAD9/E1VgFNs5NjeNTSktVdtIVvzjvBilTsXgVytyfrxtjTmf6lO5IAAAA==",
  },
  {
    src: "/Site Files/img14.jpg",
    blurDataURL: "data:webp;base64,UklGRlQAAABXRUJQVlA4IEgAAAAQAgCdASoMABAABUB8JQBOgCINBCzbHF4AAPwoRz7tCXlwilojHOA/HEqN8xoMWzHFsbki8+TQoRRQuQBugASufIIFsxGsAAA=",
  },
  {
    src: "/Site Files/img15.jpg",
    blurDataURL: "data:webp;base64,UklGRlIAAABXRUJQVlA4IEYAAAAQAgCdASoMABAABUB8JYgCdADp0hdeyKgAAP4vRK5+KvKJN/cRtt21C4CNVbxsPnfc0IFseVA21OZ1REQfQWV3AXAmpgAA",
  },
];

export default function Photos() {
  return (
    <div className="container">
      <Head>
        <title>Photos</title>
      </Head>
      <header className={styles.header}>
        <h1>Our Photo Gallery</h1>
        <p>Explore our collection of the team's installments captured in our photo gallery.</p>
      </header>
      <div className={styles.gallery}>
        {photos.map((photo, index) => (
          <Photo key={index} src={photo.src} blurDataURL={photo.blurDataURL} />
        ))}
      </div>
      {/* <section className={styles.cta}>
        <h2>Interested in Our Services?</h2>
        <p>Contact us today to learn more about what we offer and how we can help you.</p>
        <button className={styles.ctaButton}>Contact Us</button>
      </section> */}
      {/* <footer className={styles.footer}>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

const Photo = ({ src, blurDataURL }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (inView) {
      const img = new window.Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
    }
  }, [inView, src]);

  return (
    <div ref={ref} className={`${styles.imageWrapper} ${isLoaded ? styles.loaded : ""}`}>
      <Image src={src} alt="" loading="lazy" layout="fill" className={styles.image} placeholder="blur" blurDataURL={blurDataURL} />
    </div>
  );
};
