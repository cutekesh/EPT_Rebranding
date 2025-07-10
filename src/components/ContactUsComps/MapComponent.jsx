import React, { useState, useEffect } from "react";

const MapComponent = ({ locationAddress = "26 Furo Ezimora Street, Lekki Phase 1, Lagos, Nigeria" }) => {
  const [coordinates, setCoordinates] = useState({ lat: 6.4330320, lon: 3.4658390 });

  // Fetch coordinates using Nominatim API
  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationAddress)}`
        );
        const data = await response.json();

        if (data && data.length > 0) {
          setCoordinates({
            lat: parseFloat(data[0].lat),
            lng: parseFloat(data[0].lon),
          });
        } else {
          console.error("No coordinates found for the specified address.");
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    fetchCoordinates();
  }, [locationAddress]);

  // Construct the URL for the OpenStreetMap iframe src attribute
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${coordinates.lon - 0.01},${coordinates.lat - 0.005},${coordinates.lon + 0.01},${coordinates.lat + 0.005}&layer=mapnik&marker=${coordinates.lat},${coordinates.lon}`;

 

  return (
    <div className="w-full">
      <iframe
        className="w-full h-[400px] md:h-[500px] "
        loading="lazy" 
        allowFullScreen 
        referrerPolicy="no-referrer-when-downgrade" 
        src={mapSrc} 
        title="Our Office Location Map (OpenStreetMap)" 
      ></iframe>
      <p className="text-center text-[#000101] mt-4 text-lg">
        Our Office Address:{" "}
        <span className="font-semibold">{locationAddress}</span>
      </p>
    </div>
  );
};

export default MapComponent;