import React, { useState } from 'react';
import MapComponent from "../ContactUsComps/MapComponent";

const OfficeMapSection = () => {
    const officeLocations = [
        { name: "Lagos Office", address: "26 Furo Ezimora Street, Lekki Phase 1, Lagos, Nigeria", lat: 6.4330320, lon: 3.4658390 },
        { name: "Port-Harcourt Office", address: "KM 2, Igbo Etche Road, Rumukwurusi, Port Harcourt, Rivers State, Nigeria", lat: 4.8888925, lon: 7.0748974 },
        { name: "Houston Office", address: "Suite 255 , 8588 Katy Freeway, Houston TX, 77055, US", lat: 29.7871919, lon: -95.4979139 },
        { name: "Warri Office", address: "EPT Yard, KM2 Opete Road by DSC Express Way, off Otokutu Junction, Warri, Delta state, Nigeria", lat: 5.5786, lon: 5.8016 },
        { name: "Lafayette Office", address: "2904 W Old Spanish Trail New Iberia, LA 70560", lat: 30.0331354, lon: -91.8466409 },
    ];

    // Default to the Lagos Office (first in the array)
    const [selectedOffice, setSelectedOffice] = useState(officeLocations[0]);

    return (
        <div>
            {/* Map component displays the currently selected address and its coordinates */}
            <MapComponent
                locationAddress={selectedOffice.address}
                latitude={selectedOffice.lat}
                longitude={selectedOffice.lon}
            />

            {/* Buttons to select office addresses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 mt-4">
                {officeLocations.map((office, index) => (
                    <div key={index} className="relative"> {/* Wrapper div to position the pointer */}
                        <button
                            onClick={() => setSelectedOffice(office)}
                            className={`w-full py-2 transition-colors duration-200 
                                ${selectedOffice.name === office.name
                                    ? "bg-[#006A3F] text-white" // Active button styles
                                    : "bg-[#E6F3EC] text-[#000101] hover:bg-[#006A3F] hover:text-white" // Default button styles
                                }`}
                        >
                            {office.name}
                        </button>
                        {/* Pointer element - visible only when the button is active */}
                        {selectedOffice.name === office.name && (
                            <div className="absolute top-[-8px] left-1/2 transform -translate-x-1/2
                                            w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent
                                            border-b-8 border-b-[#006A3F] z-10"> {/* Triangle pointer */}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OfficeMapSection;