"use client";

import React from "react";
import styles from "./banner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <p>
        <span className={styles.serviceText}>24/7 Service!</span>
        <a href="tel:6097482919" className={styles.phoneLink}>(609) 748-2919</a>
        <span className={styles.divider}>|</span>
        <a href="tel:6097486580" className={styles.phoneLink}>
          (609) 748-6580
          <span className={styles.textBadge}>
            <FontAwesomeIcon icon={faComment} />
            Text
          </span>
        </a>
        <span className={styles.divider}>|</span>
        <a href="tel:7324755342" className={styles.phoneLink}>
          (732) 475-5342
          <span className={styles.textBadge}>
            <FontAwesomeIcon icon={faComment} />
            Text
          </span>
        </a>
      </p>
    </div>
  );
};

export default Banner;
