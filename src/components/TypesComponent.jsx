import React, { useState } from "react";
import { FaCheck } from "react-icons/fa"; // Importing the tick icon
import img1 from "/src/assets/Frame 1921.png";
import img2 from "/src/assets/Frame 1921 (1).png";
import img3 from "/src/assets/Frame 1921 (2).png";
import img4 from "/src/assets/Frame 1921 (3).png";
import img5 from "/src/assets/Frame 1921 (4).png";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="mb-2">
      <div
        className={`flex items-center justify-between p-4 cursor-pointer transition-colors duration-200 rounded-lg ${
          isOpen ? "bg-gray-300 text-gray-800" : "bg-white text-black"
        }`}
        onClick={onToggle}
      >
        <div className="flex items-center">
          <FaCheck className="text-green-500 mr-2" />
          <h3
            className={`text-lg font-semibold ${
              isOpen ? "text-gray-800" : "text-black"
            }`}
          >
            {title}
          </h3>
        </div>
        <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </div>
      {isOpen && <p className="p-4 text-gray-700">{content}</p>}
    </div>
  );
};

const TypesComponent = () => {
  const [openAccordions, setOpenAccordions] = useState(
    Array.from({ length: 5 }, () => Array(13).fill(false))
  ); // State for open accordions for each section

  const sections = [
    {
      id: 1,
      title: "Virus",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: img1,
      accordions: Array.from({ length: 13 }, (_, i) => ({
        title: `Accordion ${i + 1}`,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      })),
    },
    {
      id: 2,
      title: "Bacteria",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: img2,
      accordions: Array.from({ length: 13 }, (_, i) => ({
        title: `Accordion ${i + 1}`,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      })),
    },
    {
      id: 3,
      title: "Fungi",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: img3,
      accordions: Array.from({ length: 13 }, (_, i) => ({
        title: `Accordion ${i + 1}`,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      })),
    },
    {
      id: 4,
      title: "Parasites",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: img4,
      accordions: Array.from({ length: 13 }, (_, i) => ({
        title: `Accordion ${i + 1}`,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      })),
    },
    {
      id: 5,
      title: "Weeds",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: img5,
      accordions: Array.from({ length: 13 }, (_, i) => ({
        title: `Accordion ${i + 1}`,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      })),
    },
  ];

  const toggleAccordion = (sectionIndex, accordionIndex) => {
    setOpenAccordions((prev) => {
      const newOpenAccordions = prev.map((section, i) =>
        section.map((accordion, j) =>
          i === sectionIndex && j === accordionIndex ? !accordion : false
        )
      );
      return newOpenAccordions;
    });
  };

  return (
    <div className="p-4">
      {sections.map((section, sectionIndex) => (
        <div
          key={section.id}
          className={`flex flex-col lg:flex-row ${
            sectionIndex % 2 === 0 ? "mb-16" : "mb-16 lg:flex-row-reverse"
          }`}
        >
          {/* Image */}
          <div className="flex-1 flex items-center justify-center mb-4 lg:mb-0">
            <img
              src={section.image}
              alt={section.title}
              className="w-[607px] h-[673px] rounded-lg"
            />
          </div>
          {/* Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <p className="mb-4 text-gray-600">{section.content}</p>
            {/* Accordion List */}
            {section.accordions.map((accordion, accordionIndex) => (
              <AccordionItem
                key={accordionIndex}
                title={accordion.title}
                content={accordion.content}
                isOpen={openAccordions[sectionIndex][accordionIndex]} // Pass the open state for the current accordion
                onToggle={() => toggleAccordion(sectionIndex, accordionIndex)} // Toggle the accordion
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TypesComponent;


