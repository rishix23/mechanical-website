import React from "react";
import styles from "./areas.module.css";

const areas = [
  { name: "Cape May", lat: 38.9382, lng: -74.9101, label: "A" },
  { name: "Wildwood", lat: 38.996, lng: -74.816, label: "B" },
  { name: "Stone Harbor", lat: 39.0491, lng: -74.7616, label: "C" },
  { name: "Avalon", lat: 39.09008, lng: -74.7229, label: "D" },
  { name: "Sea Isle City", lat: 39.1791, lng: -74.675, label: "E" },
  { name: "Ocean City", lat: 39.29125339824409, lng: -74.5586785651099, label: "F" },
  { name: "Ventnor City", lat: 39.34387254799273, lng: -74.4659679388797, label: "G" },
  { name: "Galloway", lat: 39.56383238775242, lng: -74.54271981278094, label: "H" },
  { name: "Brigantine", lat: 40.5141, lng: -112.0325, label: "I" },
  { name: "Beach Haven", lat: 40.6594, lng: -111.9961, label: "J" },
];

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const defaultCenter = {
  lat: 39.293,
  lng: -74.86230328312534,
};

const generateStaticMapUrl = (apiKey, center, zoom, markers) => {
  const baseUrl = "https://maps.googleapis.com/maps/api/staticmap";
  const size = "600x400"; // Reduced size for a smaller map
  const scale = "2"; // Increased scale for higher resolution

  // Generate markers with area names as labels
  const markerParams = markers
    .map((marker) => {
      const label = encodeURIComponent(marker.name); // Encode area name for URL
      return `markers=size:small|color:red|label:${label}|${marker.lat},${marker.lng}`;
    })
    .join("&");

  return `${baseUrl}?center=${center.lat},${center.lng}&zoom=${zoom}&size=${size}&scale=${scale}&${markerParams}&key=${apiKey}`;
};

const AreasWeServe = () => {
  const mapUrl = generateStaticMapUrl(apiKey, defaultCenter, 9, areas);

  const half = Math.ceil(areas.length / 2);
  const firstHalf = areas.slice(0, half);
  const secondHalf = areas.slice(half);

  return (
    <div className={`container section ${styles.areasWeServe}`}>
      <div className={styles.contentWrapper}>
        <div className={styles.mapContainer}>
          <img src={mapUrl} alt="Areas We Serve Map" className={styles.map} />
        </div>
        <div className={styles.areasListContainer}>
          <h2>Areas We Service</h2>
          <p>We offer services in all of South Jersey from Cape May to surrounding areas.</p>
          <div className={styles.areasListWrapper}>
            <ul>
              {firstHalf.map((area, index) => (
                <li key={index} className={styles.areaItem}>
                  {area.name}
                </li>
              ))}
            </ul>
            <ul>
              {secondHalf.map((area, index) => (
                <li key={index} className={styles.areaItem}>
                  {area.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreasWeServe;
