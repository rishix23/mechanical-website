import React, { useEffect, useState } from "react";
import styles from "./carousel.module.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { type: "review", text: "Great service and friendly staff!" },
    { type: "review", text: "Highly recommend this company." },
    { type: "review", text: "Professional and reliable." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={styles.carousel}>
      {slides.map((slide, index) => (
        <div key={index} className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}>
          {slide.type === "image" ? <img src={slide.src} alt={`Slide ${index + 1}`} className={styles.image} /> : <blockquote className={styles.review}>{slide.text}</blockquote>}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
