import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "/src/assets/Frame 1921.png"; // Replace with your image path
import { Accordion } from "react-bootstrap"; // Import Bootstrap Accordion
import rightTick from "/src/assets/circle-check-big.png"

const TypesComponentPart1 = () => {
  const accordionData = [
    {
      id: 1,
      title: "Transmission Method",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Host Range",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Symptoms",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      title: "Incubation Period",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      title: "Speed Rate",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      title: "Reproduction Mechanism",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 7,
      title: "Host Specificity",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 8,
      title: "Impact on Crop Yield",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 9,
      title: "Control Measures",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 10,
      title: "Resistance",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 11,
      title: "Environmental Impact",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 12,
      title: "Economic Loss",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 13,
      title: "Preventive Method",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="container-fluid mt-24 mb-36">
      <div className="row">
        {/* Left Side Image */}
        <div className="col-lg-6 d-flex justify-content-center align-items-start mb-4 mb-lg-0">
          <img
            src={img1}
            alt="Virus"
            className="img-fluid rounded"
            style={{ width: "607px", height: "870px", objectFit: "cover" }}
          />
        </div>

        {/* Right Side Content */}
        <div className="col-lg-6">
          {/* Heading */}
          <h2 className="mb-3 text-[39px] font-semibold">Virus</h2>

          {/* Lorem Text */}
          <p className="mb-4 text-[#9F9F9F] font-medium max-w-[585px] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          {/* Accordion Section */}
          <Accordion defaultActiveKey="0" className="max-w-[585px]">
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
      </div>
    </div>
  );
};

export default TypesComponentPart1;
