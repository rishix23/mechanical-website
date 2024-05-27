// components/ClientWrapper.js

"use client";

import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const ClientWrapper = ({ serviceBoxClass, visibleClass, children }) => {
  useIntersectionObserver(serviceBoxClass, visibleClass);

  return <>{children}</>;
};

export default ClientWrapper;
