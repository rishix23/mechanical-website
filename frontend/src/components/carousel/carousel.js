import React, { useEffect, useState } from "react";
import styles from "./carousel.module.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { type: "image", src: "/cooling.jpg" },
    { type: "review", text: "Great service and friendly staff!" },
    { type: "review", text: "Highly recommend this company." },
    { type: "review", text: "Professional and reliable." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={styles.carousel}>
      <div className={styles.track} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <blockquote className={styles.review}>{slide.text}</blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
