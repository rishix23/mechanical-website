import { useEffect, useRef } from "react";
import styles from "./map.module.css";
import loadGoogleMapsScript from "../../utils/loadGoogleMapsScript";

const GoogleMap = () => {
  const mapRef = useRef(null);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    const initializeMap = () => {
      const center = { lat: 39.45575415606578, lng: -74.52691539292539 };
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: 14,
      });

      const marker = new window.google.maps.Marker({
        position: center,
        map,
        title: "D.R. Mechanical",
      });

      const infowindow = new window.google.maps.InfoWindow({
        content: `<div class="${styles.infoWindow}">D.R Mechanical</div>`,
      });

      infowindow.open(map, marker);
    };

    window.initMap = initializeMap; // Set the global callback function

    loadGoogleMapsScript(apiKey).catch((error) => {
      console.error("Failed to load Google Maps script:", error);
    });
  }, [apiKey]);

  return <div ref={mapRef} className={styles.map} />;
};

export default GoogleMap;
