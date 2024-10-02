import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "/src/assets/Picture2.png"; // Replace with your image path
import { Accordion } from "react-bootstrap"; // Import Bootstrap Accordion
import rightTick from "/src/assets/circle-check-big.png";

const TypesComponentPart1 = () => {
  const accordionData = [
    {
      id: 1,
      title: "Native Range",
      content:
        "Found in Northern Africa, the Balkans, and western and central Asia.",
    },
    {
      id: 2,
      title: "Distribution",
      content:
        "Present in countries including Afghanistan, Algeria, Greece, Iran, Iraq, Kazakhstan, Romania, Turkey, and others.",
    },
    {
      id: 3,
      title: "Threat Level",
      content:
        "The major pest of bread and durum wheat, causes stunting, floret abortion, and kernel shrivelling, with yield losses of 50-90%.",
    },
    {
      id: 4,
      title: "Management Measures",
      content:
        "Commonly controlled using insecticides like deltamethrin, fenitrothion, trichlorfon, and lambda-cyhalothrin in Iran.",
    },
    {
      id: 5,
      title: "Estimated Yield Loss",
      content:
        "This can cause significant losses, approximately 20-30% in barley and 50-90% in wheat during population surges.",
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
    <div className="container py-5">
      <div className="row justify-content-center">
        {/* Left Side Image */}
        <div className="col-lg-5">
          <img
            src={img1}
            alt="Virus"
            className="rounded w-full h-[500px]"
            // style={{ width: "607px", height: "787px", objectFit: "cover" }}
          />
        </div>
        <div className="col-lg-1"></div>
        {/* Right Side Content */}
        <div className="col-lg-5">
          {/* Heading */}
          <h2 className="mb-3 text-[39px] font-semibold text-[#000]">
          Sunn pest (Eurygaster Integriceps Puton)
          </h2>

          {/* Lorem Text */}
          <p className="mb-4 text-[#9F9F9F] font-medium text-justify">
            Sunn pests are known for their destructive feeding habits on wheat
            and other cereal crops, leading to significant yield losses. They
            damage plants by sucking sap, which can result in reduced grain
            quality and quantity.
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

export default TypesComponentPart1;
