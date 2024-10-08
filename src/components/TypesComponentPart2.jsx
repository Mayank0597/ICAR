import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "/src/assets/Optimized image/Frame192111-ezgif.com-png-to-webp-converter.webp"; // Replace with your image path
import mobile from "/src/assets/Optimized image/Frame192118-ezgif.com-optiwebp.webp";
import { Accordion } from "react-bootstrap"; // Import Bootstrap Accordion
import rightTick from "/src/assets/circle-check-big.png";

const TypesComponentPart2 = () => {
  const accordionData = [
    {
      id: 1,
      title: "Casual Organism",
      content: "Spodoptera littoralis (Boisduval).",
    },
    {
      id: 2,
      title: "Origin of Pest",
      content:
        "Native to much of Northern Africa, the Balkans, and western and central Asia.",
    },
    {
      id: 3,
      title: "Distribution",
      content:
        "Found in numerous regions, including Asia (Bahrain, Cyprus, Iran, Iraq, Jordan, and more) and Africa (Algeria, Egypt, Kenya, and others), with presence noted in the EU.",
    },
    {
      id: 4,
      title: "Likely Threat",
      content:
        "Affects major crops like maize, rice, wheat, and sugarcane, with damage to vegetables, cotton, and legumes, and minor impacts on ornamentals and wild plants.",
    },
    {
      id: 5,
      title: "Available Management Measures",
      content:
        "Various biological control methods have been explored, including parasitoids, predators, and the use of a nuclear polyhedrosis virus, along with fungi and microsporidia.",
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
    <>
      <div className="container py-5 md:px-0 px-[30px]">
        <div className="row flex-col-reverse md:flex-row justify-content-center">
          {/* Left Side Content */}
          <div className="col-lg-5">
            {/* Heading */}
            <h2 className="mb-3 md:text-[39px] text-[23px] font-semibold text-[#000]">
              African Cotton Leafworm (Spodoptera Littoralis)
            </h2>

            {/* Lorem Text */}
            <p className="mb-4 text-[#9F9F9F] font-medium text-justify">
              The African cotton leafworm is a major pest of cotton and other
              crops, causing severe defoliation and reducing plant vigour. Their
              rapid reproduction and voracious feeding habits can lead to
              substantial economic losses for farmers.
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
          <div className="col-lg-5 mb-[40px]">
            <img
              src={window.innerWidth ? mobile : img1}
              alt="Virus"
              className="w-full md:h-[600px] rounded"
            />
          </div>
        </div>
      </div>
      <hr className="md:hidden mx-[30px]" />
    </>
  );
};

export default TypesComponentPart2;
