// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import locationIcon from "/src/assets/ion_location-sharp.png";

// // Sample company locations (latitude, longitude)
// const companyLocations = [
//   { id: 1, name: "Company HQ", position: [51.505, -0.09] }, // Example coordinates (London)
//   { id: 2, name: "Branch Office", position: [48.8566, 2.3522] }, // Example coordinates (Paris)
// ];

// // Custom marker icon for company location
// const companyLocationIcon = new L.Icon({
//   iconUrl: locationIcon, // Your custom icon
//   iconSize: [21, 30], // Size of the icon
//   iconAnchor: [11, 32], // Point where the icon should be placed
//   popupAnchor: [0, -32], // Point where the popup should open
// });

// const MapComponent = () => {
//   return (
//     <div className="map-container">
//       <MapContainer
//         center={[51.505, -0.09]} // Default center coordinates
//         zoom={5} // Default zoom level
//         style={{ height: "400px", width: "100%" }} // Responsive map size
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
//         />

//         {/* Display company locations */}
//         {companyLocations.map((location) => (
//           <Marker
//             key={location.id}
//             position={location.position}
//             icon={companyLocationIcon}
//           >
//             <Popup>{location.name}</Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default MapComponent;

import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import locationIcon from "/src/assets/ion_location-sharp.png";

// Sample company locations (latitude, longitude)
const companyLocations = [
  { id: 1, name: "Company HQ", position: [51.505, -0.09] }, // Example coordinates (London)
  { id: 2, name: "Branch Office", position: [48.8566, 2.3522] }, // Example coordinates (Paris)
];

// Custom marker icon for company location
const companyLocationIcon = new L.Icon({
  iconUrl: locationIcon, // Your custom icon
  iconSize: [21, 30], // Size of the icon
  iconAnchor: [11, 32], // Point where the icon should be placed
  popupAnchor: [0, -32], // Point where the popup should open
});

// Component to handle enabling scroll zoom on map focus
const MapScrollHandler = () => {
  const map = useMap(); // Access the map instance

  useEffect(() => {
    const handleMapClick = () => {
      map.scrollWheelZoom.enable(); // Enable zoom on focus
    };

    const handleMapLeave = () => {
      map.scrollWheelZoom.disable(); // Disable zoom when leaving map
    };

    // Add event listeners for enabling/disabling scroll zoom
    map.on("focus", handleMapClick);
    map.on("blur", handleMapLeave);

    return () => {
      map.off("focus", handleMapClick);
      map.off("blur", handleMapLeave);
    };
  }, [map]);

  return null;
};

const MapComponent = () => {
  return (
    <div className="map-container">
      <MapContainer
        center={[51.505, -0.09]} // Default center coordinates
        zoom={5} // Default zoom level
        scrollWheelZoom={false} // Disable scroll zoom by default
        style={{ height: "400px", width: "100%" }} // Responsive map size
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Display company locations */}
        {companyLocations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            icon={companyLocationIcon}
          >
            <Popup>{location.name}</Popup>
          </Marker>
        ))}

        {/* Scroll handler to enable/disable scroll zoom on focus */}
        <MapScrollHandler />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
