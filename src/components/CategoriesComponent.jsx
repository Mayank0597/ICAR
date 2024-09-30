import React from "react";
import LeftImage from "/src/assets/Optimized image/Frame20-ezgif.com-png-to-webp-converter.webp";
import img1 from "/src/assets/Optimized image/Frame22-ezgif.com-png-to-webp-converter.webp";
import img2 from "/src/assets/Optimized image/Frame221-ezgif.com-png-to-webp-converter.webp";

const Categories = () => {
  return (
    <div className="mx-auto py-[90px] px-[16px] lg:!px-16">
      {/* Heading */}
      <div className="mb-12">
        <h1 className="text-[39px] font-semibold text-left text-[#393939]">
          Categories of <span className="text-[#6BA85D]">Pest</span>
        </h1>
      </div>

      {/* Card 1 */}
      <div className="flex flex-col lg:flex-row bg-[#ECF2E6] pl-8 pt-8 pb-8 pr-[86px] mb-16 rounded-lg gap-5">
        {/* Left Image */}
        <div className="lg:w-2/5 mb-[16px] lg:mb-0 flex justify-start items-center">
          <img
            src={LeftImage}
            alt="Pesticide Category"
            className="w-[444px] h-[391px]"
          />
        </div>
        {/* Right Content */}
        <div className="lg:w-3/5">
          <h2 className="text-[33px] font-semibold mb-2 text-[#393939]">
            Insect
          </h2>
          <p className="mb-11 text-[#949191] text-justify max-w-[740px]">
            Lorem ipsum dolor sit amet, consectetur adipisng elit. Sed do
            eiusmod tempor incididunut labore et dolore magna aliqua.Lorem ipsum
            dolor sit amet, consectetur adipisng elit. Sed do eiusmod tempor
            incididunut labore et dolore magna aliqua. Lorem ipsum dolor sit
            amet, consectetur adipisng elit. Sed do eiusmod tempor incididunut
            labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
            consectetur adipisng elit. Sed do eiusmod tempor incididunut labore
            et dolore magna aliqua
          </p>
          {/* <div className="flex mb-4">
            <img
              src={img1}
              alt="Pesticide Detail"
              className="mr-14 w-[92px] h-[77px] rounded"
            />
            <img
              src={img2}
              alt="Pesticide Detail"
              className="w-[92px] h-[77px] rounded"
            />
          </div>
          <p>Some additional information here.</p> */}
          {/* Images with individual texts */}
          <div className="flex space-x-14">
            {/* First Image and Text */}
            <div className="text-center">
              <img
                src={img1}
                alt="Pesticide Detail"
                className="w-[92px] h-[77px] rounded mb-2"
              />
              <p className="text-[#393939]">Sunn Pest</p>{" "}
              {/* Text below img1 */}
            </div>

            {/* Second Image and Text */}
            <div className="text-center">
              <img
                src={img2}
                alt="Pesticide Detail"
                className="w-[92px] h-[77px] rounded mb-2"
              />
              <p className="text-[#393939]">African Cotton Leaform</p>{" "}
              {/* Text below img2 */}
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col lg:flex-row-reverse bg-[#ECF2E6] pr-8 pt-8 pb-8 pl-[37px] rounded-lg gap-5">
        {/* Right Image */}
        <div className="lg:w-2/5 mb-[16px] lg:mb-0 flex justify-end items-center">
          <img
            src={LeftImage}
            alt="Pesticide Category"
            className="w-[444px] h-[391px]"
          />
        </div>
        {/* Left Content */}
        <div className="lg:w-3/5">
          <h2 className="text-[33px] font-semibold mb-2 text-[#393939]">
            Diseases
          </h2>
          <p className="mb-11 text-justify text-[#949191] max-w-[740px]">
            Lorem ipsum dolor sit amet, consectetur adipisng elit. Sed do
            eiusmod tempor incididunut labore et dolore magna aliqua.Lorem ipsum
            dolor sit amet, consectetur adipisng elit. Sed do eiusmod tempor
            incididunut labore et dolore magna aliqua. Lorem ipsum dolor sit
            amet, consectetur adipisng elit. Sed do eiusmod tempor incididunut
            labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
            consectetur adipisng elit. Sed do eiusmod tempor incididunut labore
            et dolore magna aliqua
          </p>
          {/* <div className="flex mb-4">
            <img
              src={img1}
              alt="Pesticide Detail"
              className="mr-4 w-32 h-20 object-cover"
            />
            <img
              src={img2}
              alt="Pesticide Detail"
              className="w-32 h-20 object-cover"
            />
          </div>
          <p>Some additional information here.</p> */}
          {/* Images with individual texts */}
          <div className="flex space-x-14">
            {/* First Image and Text */}
            <div className="text-center">
              <img
                src={img1}
                alt="Pesticide Detail"
                className="w-[92px] h-[77px] rounded mb-2"
              />
              <p className="text-[#393939]">Sunn Pest</p>{" "}
              {/* Text below img1 */}
            </div>

            {/* Second Image and Text */}
            <div className="text-center">
              <img
                src={img2}
                alt="Pesticide Detail"
                className="w-[92px] h-[77px] rounded mb-2"
              />
              <p className="text-[#393939]">African Cotton Leaform</p>{" "}
              {/* Text below img2 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
