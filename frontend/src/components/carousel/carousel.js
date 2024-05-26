import React, { useEffect, useState } from "react";
import styles from "./carousel.module.css";
import Image from "next/image";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { type: "image", src: "/Site Files/img16.jpg" },
    { type: "review", name: "John Doe", stars: 5, date: "2 days ago", text: "Great service and friendly staff!" },
    { type: "image", src: "/Site Files/img17.jpg" },
    { type: "review", name: "Jane Smith", stars: 4, date: "1 week ago", text: "Highly recommend this company." },
    { type: "image", src: "/Site Files/img18.jpg" },
    { type: "review", name: "Alice Brown", stars: 5, date: "3 weeks ago", text: "Professional and reliable." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      <h2 className={styles.header}>Look at our happy customers and reviews taken straight from Google Reviews!</h2>
      <div className={styles.carousel}>
        <div className={styles.track} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className={styles.slide}>
              {slide.type === "image" ? (
                <Image src={slide.src} alt="Cooling Service" layout="fill" objectFit="cover" className={styles.image} />
              ) : (
                <div className={styles.review}>
                  <p className={styles.reviewText}>&ldquo;{slide.text}&rdquo;</p>
                  <div className={styles.reviewDetails}>
                    <div className={styles.stars}>
                      {Array.from({ length: slide.stars }, (_, i) => (
                        <FontAwesomeIcon icon={faStar} key={i} color="#FFD700" />
                      ))}
                    </div>
                    <p className={styles.reviewerName}>{slide.name}</p>
                    <p className={styles.reviewDate}>{slide.date}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
