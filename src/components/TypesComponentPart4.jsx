import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "/src/assets/Picture5.jpg"; // Replace with your image path
import { Accordion } from "react-bootstrap"; // Import Bootstrap Accordion
import rightTick from "/src/assets/circle-check-big.png";

const TypesComponentPart4 = () => {
  const accordionData = [
    {
      id: 1,
      title: "Casual Organism",
      content: "Magnaporthe oryzae pathotype Triticum.",
    },
    {
      id: 2,
      title: "Origin of Disease",
      content:
        "First reported in Brazil in 1985, although indications suggest it may have been present since 1936.",
    },
    {
      id: 3,
      title: "Distribution",
      content:
        "Spread from Brazil to Bolivia (1996), Paraguay (2002), Argentina (2007), and Bangladesh (2016), with significant outbreaks in various districts in these countries and additional spread to Zambia (2018).",
    },
    {
      id: 4,
      title: "Likely Threat",
      content:
        "Seed-borne inoculum and airborne spores facilitate long-distance dispersal, with high-risk areas identified in Central India, Bangladesh, and parts of North America.",
    },
    {
      id: 5,
      title: "Available Management Measures",
      content:
        "Integrated management strategies include quarantine, varietal resistance (e.g., HD3249, HD3171), crop rotation, use of disease-free seeds, and removal of grassy weeds.",
    },
    {
      id: 6,
      title: "Estimated Yield Loss",
      content:
        "Wheat blasts can cause yield losses of up to 100%, with reported losses of 10.5-53% in Brazil, 80-100% in Bolivia, and 25-30% in Bangladesh during significant outbreaks, impacting grain quality.",
    },
    // {
    //   id: 7,
    //   title: "Host Specificity",
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //   id: 8,
    //   title: "Impact on Crop Yield",
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //   id: 9,
    //   title: "Control Measures",
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //   id: 10,
    //   title: "Resistance",
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //   id: 11,
    //   title: "Environmental Impact",
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //   id: 12,
    //   title: "Economic Loss",
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //   id: 13,
    //   title: "Preventive Method",
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
  ];

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        {/* Left Side Content */}
        <div className="col-lg-5">
          {/* Heading */}
          <h2 className="mb-3 text-[39px] font-semibold text-[#000]">
            Wheat Blast (Magnaporthe oryzae pathotype Triticum)
          </h2>

          {/* Lorem Text */}
          <p className="mb-4 text-[#9F9F9F] font-medium text-justify">
            Wheat blast is a devastating fungal disease that affects wheat
            crops, leading to severe yield reductions and compromised grain
            quality. The disease spreads rapidly under favourable conditions,
            making early detection and management essential.
          </p>

          {/* Accordion Section */}
          <Accordion defaultActiveKey="0">
            {accordionData.map(({ id, title, content }) => (
              <Accordion.Item eventKey={id.toString()} key={id}>
                <Accordion.Header className="text-[#393939] font-medium">
                  {/* Right Tick Icon */}
                  <img
                    src={rightTick}
                    alt="tick"
                    className="mr-3"
                    style={{ width: "20px", height: "20px" }}
                  />
                  {title}
                </Accordion.Header>

                <Accordion.Body className="text-[#9F9F9F] font-medium">
                  {content}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>

        <div className="col-lg-1"></div>
        {/* Right Side Image */}
        <div className="col-lg-5">
          <img src={img1} alt="Virus" className="w-full h-[500px] rounded" />
        </div>
      </div>
    </div>
  );
};

export default TypesComponentPart4;
