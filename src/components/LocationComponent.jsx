import React from "react";

const LocationComponent = () => {
  return (
    <div className="w-full h-[400px] lg:h-[528px] my-20">
      {/* Full-width map container */}
      <div className="relative w-full h-full">
        <iframe
          title="Location Map"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.7686256056018!2d81.66698017472007!3d21.241021680455354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd93c7a3719f%3A0x9a855ba3eb9fa08b!2sSampark%20Infoways%20-%20Web%20Development%20Company%20%7C%20UI%20UX%20Design%20%7C%20IT%20Services%20%26%20Manpower%20Outsourcing!5e0!3m2!1sen!2sin!4v1726651913034!5m2!1sen!2sin"
          loading="lazy"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
};

export default LocationComponent;
