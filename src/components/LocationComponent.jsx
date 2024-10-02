import React from "react";

const LocationComponent = () => {
  return (
    <div className="w-full h-[400px] lg:h-[528px]">
      {/* Full-width map container */}
      <div className="relative w-full h-full">
        <iframe
          title="Location Map"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.452110965472!2d77.2108641749562!3d28.616208984822812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b6943f2eb3%3A0x1659fe3e955af504!2sKrishi%20Bhavan!5e0!3m2!1sen!2sin!4v1727866521947!5m2!1sen!2sin"
          loading="lazy"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
};

export default LocationComponent;
