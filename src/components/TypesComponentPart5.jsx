import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "/src/assets/Optimized image/Frame192114-ezgif.com-png-to-webp-converter.webp"; // Replace with your image path
import mobile from "/src/assets/Optimized image/Frame192117-ezgif.com-png-to-webp-converter.webp";
import { Accordion } from "react-bootstrap"; // Import Bootstrap Accordion
import rightTick from "/src/assets/circle-check-big.png";

const TypesComponentPart5 = () => {
  const accordionData = [
    {
      id: 1,
      title: "Casual Organism",
      content:
        "Tomato brown rugose fruit virus (ToBRFV), an emerging tobamovirus first reported in 2014 in Israel and in 2015 in Jordan.",
    },
    {
      id: 2,
      title: "Distribution",
      content:
        "Found in numerous countries worldwide, including India (first reported in 2023), with a significant presence in Europe, the Americas, and Asia.",
    },
    {
      id: 3,
      title: "Likely Threat",
      content:
        "ToBRFV can overcome existing resistance genes in tomatoes, posing a high risk for widespread establishment in tomato and pepper crops.",
    },
    {
      id: 4,
      title: "Available Management Measures",
      content:
        "Prophylactic measures include strict sanitation practices, crop rotation, and reporting suspected infections to authorities for material destruction.",
    },
    {
      id: 5,
      title: "Estimated Yield Loss",
      content:
        "The virus can infect nearly all plants in a crop, resulting in yield losses of 30-70% and reducing the marketability of infected fruits.",
    },
    // {
    //   id: 6,
    //   title: "Reproduction Mechanism",
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
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
    <div className="container pt-5 pb-24 md:px-0 px-[30px]">
      <div className="row justify-content-center">
        {/* Left Side Image */}
        <div className="col-lg-5 mb-[40px]">
          <img
            src={window.innerWidth < 768 ? mobile : img1}
            alt="Virus"
            className="img-fluid rounded w-full md:h-[600px]"
            // style={{ width: "607px", height: "787px", objectFit: "cover" }}
          />
        </div>
        <div className="col-lg-1"></div>
        {/* Right Side Content */}
        <div className="col-lg-5">
          {/* Heading */}
          <h2 className="mb-3 md:text-[39px] text-[23px] font-semibold text-[#000]">
            Tomato Brown Rugose Fruit Disease (ToBRFV)
          </h2>

          {/* Lorem Text */}
          <p className="mb-4 text-[#9F9F9F] font-medium text-justify">
            Tomato brown rugose fruit disease is caused by a virus that leads to
            severe deformities in tomato fruits, resulting in significant
            economic losses. The disease is spread through insect vectors and
            contaminated tools.
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

export default TypesComponentPart5;
