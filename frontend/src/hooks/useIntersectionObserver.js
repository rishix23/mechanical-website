// hooks/useIntersectionObserver.js

import { useEffect } from "react";

const useIntersectionObserver = (serviceBoxClass, visibleClass) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Element is in view:", entry.target);
          entry.target.classList.add(visibleClass);
        }
      });
    });

    const elements = document.querySelectorAll(`.${serviceBoxClass}`);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [serviceBoxClass, visibleClass]);
};

export default useIntersectionObserver;
