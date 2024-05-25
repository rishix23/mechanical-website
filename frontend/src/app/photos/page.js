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
];

export default function Photos() {
  return (
    <div className="container section">
      <Head>
        <title>Photos</title>
      </Head>
      <h1>Photos</h1>
      <div className={styles.gallery}>
        {photos.map((photo, index) => (
          <Photo key={index} src={photo.src} blurDataURL={photo.blurDataURL} />
        ))}
      </div>
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
      <Image src={src} alt="" layout="fill" objectFit="cover" className={styles.image} placeholder="blur" blurDataURL={blurDataURL} />
    </div>
  );
};
