import React, { useEffect, useState } from "react";
import styles from "./carousel.module.css";
import Image from "next/image";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { type: "image", src: "/Site Files/img16.jpg" },
    {
      type: "review",
      name: "Amit Kundu",
      stars: 5,
      date: "2 days ago",
      text: "TJ, the owner for this business is an absolute professional! He is very responsive and accessible. TJ recently replaced my heating unit at my rental property in Wildwood, NJ.",
    },
    { type: "image", src: "/Site Files/img17.jpg" },
    {
      type: "review",
      name: "Kurt Meyers",
      stars: 5,
      date: "1 week ago",
      text: "We had several estimates and DR Mechanical was by far the best price! They came the next day with 4 members in the crew and installed our new AC and furnace. ",
    },
    { type: "image", src: "/Site Files/img18.jpg" },
    {
      type: "review",
      name: "Taylor Kay",
      stars: 5,
      date: "3 weeks ago",
      text: "TJ and his workers are very professional and responsive. He was able to give me a good price for replacing my air conditioner and he fixed my heater as well. ",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      <h2 className={styles.header}>Take a look at our customers testimonials taken straight from Google Reviews!</h2>
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
