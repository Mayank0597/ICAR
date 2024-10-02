import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "/src/assets/Picture4.jpg"; // Replace with your image path
import { Accordion } from "react-bootstrap"; // Import Bootstrap Accordion
import rightTick from "/src/assets/circle-check-big.png";

const TypesComponentPart3 = () => {
  const accordionData = [
    {
      id: 1,
      title: "Casual Organism",
      content:
        "Meligethes aeneus (Fabricius)",
    },
    {
      id: 2,
      title: "Origin",
      content:
        "Native to Europe",
    },
    {
      id: 3,
      title: "Distribution",
      content:
        "Commonly found across Afghanistan, China, Turkey, Kazakhstan, and Mongolia, and widespread throughout the Holarctic Region, including North America and parts of North Africa.",
    },
    {
      id: 4,
      title: "Likely Threat",
      content:
        "The major pest of Brassica crops, particularly oilseed rape (Brassica napus) and turnip rape (Brassica rapa).",
    },
    {
      id: 5,
      title: "Available Management Measures",
      content:
        "Control involves pyrethroid insecticides, though resistance is increasing, highlighting the need for biological control strategies.",
    },
    {
      id: 6,
      title: "Estimated Yield Loss",
      content:
        "Damage from 2 beetles per plant is economically concerning, with losses of 16% at five beetles and up to 50% at 20 beetles.",
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
        {/* Left Side Image */}
        <div className="col-lg-5">
          <img
            src={img1}
            alt="Virus"
            className="img-fluid rounded w-full h-[500px]"
            // style={{ width: "607px", height: "787px", objectFit: "cover" }}
          />
        </div>
        <div className="col-lg-1"></div>
        {/* Right Side Content */}
        <div className="col-lg-5">
          {/* Heading */}
          <h2 className="mb-3 text-[39px] font-semibold text-[#000]">
            Rape beetle (Meligethes aeneus)
          </h2>

          {/* Lorem Text */}
          <p className="mb-4 text-[#9F9F9F] font-medium text-justify">
            Rape beetles are particularly harmful to canola and rapeseed crops,
            where they feed on the leaves and buds. Their infestations can
            result in stunted growth and lower seed production, negatively
            impacting overall crop yield.
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

                <Accordion.Body className="text-[#9F9F9F] text-base font-medium">
                  {content}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default TypesComponentPart3;
