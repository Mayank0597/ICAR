import React from "react";

const LocationComponent = () => {
  return (
    <div className="w-full h-[400px] lg:h-[528px]">
      {/* Full-width map container */}
      <div className="relative w-full h-full">
        <iframe
          title="Location Map"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.2415289971323!2d81.82300317472384!3d21.380392475609526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28ec8250cab62f%3A0x797be004ee2a17f3!2s9RJG%2B564%2C%20Baronda%2C%20Chhattisgarh%20493225!5e0!3m2!1sen!2sin!4v1727854477603!5m2!1sen!2sin"
          loading="lazy"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
};

export default LocationComponent;
