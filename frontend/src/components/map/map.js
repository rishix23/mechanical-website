import { useEffect, useRef } from "react";
import styles from "./map.module.css";

const GoogleMap = () => {
  const mapRef = useRef(null);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    let script;

    const initializeMap = () => {
      const center = { lat: 39.45575415606578, lng: -74.52691539292539 };
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: 14,
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

    const loadScript = (url) => {
      return new Promise((resolve, reject) => {
        script = document.createElement("script");
        script.src = url;
        script.async = true;
        script.defer = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const initMap = async () => {
      if (!window.google) {
        try {
          await loadScript(`https://maps.googleapis.com/maps/api/js?key=${apiKey}`);
          initializeMap();
        } catch (error) {
          console.error("Failed to load Google Maps script:", error);
        }
      } else {
        initializeMap();
      }
    };

    initMap();

    return () => {
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, [apiKey]);

  return <div ref={mapRef} className={styles.map} />;
};

export default GoogleMap;
