import { useEffect, useRef } from "react";
import styles from "./map.module.css";

const GoogleMap = () => {
  const mapRef = useRef(null);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    const initializeMap = () => {
      const center = { lat: 39.45575415606578, lng: -74.52691539292539 };
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: 15,
      });

      const marker = new window.google.maps.Marker({
        position: center,
        map,
        title: "D.R Mechanical",
      });

      const infowindow = new window.google.maps.InfoWindow({
        content: `<div class="${styles.infoWindow}">D.R Mechanical</div>`,
      });

      // Open the info window immediately
      infowindow.open(map, marker);
    };

    if (!window.google) {
      const script = document.createElement("script");
      console.log("keyis: " + apiKey);

      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    } else {
      initializeMap();
    }
  }, []);

  return <div ref={mapRef} className={styles.map} />;
};

export default GoogleMap;
