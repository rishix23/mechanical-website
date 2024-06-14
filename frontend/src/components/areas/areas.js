// components/AreasWeServe.js
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styles from "./areas.module.css";
import { useEffect, useState } from "react";

const areas = [
  { name: "Cape May", lat: 38.9382, lng: -74.9101 },
  { name: "Wildwood", lat: 38.996, lng: -74.816 },
  { name: "Stone Harbor", lat: 39.0491, lng: -74.7616 },
  { name: "Avalon", lat: 39.09008, lng: -74.7229 },
  { name: "Sea Isle City", lat: 39.1791, lng: -74.675 },
  { name: "Ocean City", lat: 39.29125339824409, lng: -74.5586785651099 },
  { name: "Ventnor City", lat: 39.34387254799273, lng: -74.4659679388797 },
  { name: "Galloway", lat: 39.56383238775242, lng: -74.54271981278094 },
  { name: "Brigantine", lat: 40.5141, lng: -112.0325 },
  { name: "Beach Haven", lat: 40.6594, lng: -111.9961 },
  // { name: "Long Beach Island", lat: 40.6869, lng: -111.8755 },
];

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const mapStyles = {
  height: "400px",
  width: "100%",
};

const defaultCenter = {
  lat: 39.06369299141427,
  lng: -74.86230328312534,
};

const AreasWeServe = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={`container section ${styles.areasWeServe}`}>
      <div className={styles.mapContainer}>
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap mapContainerStyle={mapStyles} zoom={8} center={defaultCenter}>
            {areas.map((area, index) => (
              <Marker
                key={index}
                position={{ lat: area.lat, lng: area.lng }}
                label={{
                  text: area.name,
                  color: "#000000",
                  fontSize: "10px", // Adjust the font size for readability
                  fontWeight: "bold",
                  className: styles.markerLabel, // Add custom class for additional styling
                }}
                icon={
                  isClient
                    ? {
                        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", // Custom icon URL
                        scaledSize: new window.google.maps.Size(25, 25), // Adjust the size of the icon
                      }
                    : undefined
                }
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
      <div className={styles.areasListContainer}>
        <h2>Areas We Service</h2>
        <p>We offer services in all of South Jersey from Cape May up to Central Jersey and surrounding areas</p>
        <div className={styles.areasListWrapper}>
          <ul>
            {areas.slice(0, areas.length / 2).map((area, index) => (
              <li key={index} className={styles.areaItem}>
                {area.name}
              </li>
            ))}
          </ul>
          <ul>
            {areas.slice(areas.length / 2).map((area, index) => (
              <li key={index} className={styles.areaItem}>
                {area.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AreasWeServe;
