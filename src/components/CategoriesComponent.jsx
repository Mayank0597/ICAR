import React from "react";
import LeftImage from "/src/assets/Optimized image/Frame201-ezgif.com-png-to-webp-converter.webp";
import RightImage from "/src/assets/Optimized image/Frame202-ezgif.com-png-to-webp-converter (1).webp";
import img1 from "/src/assets/Optimized image/Frame222-ezgif.com-png-to-webp-converter.webp";
import img2 from "/src/assets/Optimized image/Frame223-ezgif.com-png-to-webp-converter.webp";
import img3 from "/src/assets/Optimized image/Frame224-ezgif.com-png-to-webp-converter.webp";
import img4 from "/src/assets/Optimized image/Frame225-ezgif.com-png-to-webp-converter.webp";
import img5 from "/src/assets/Optimized image/Frame226-ezgif.com-png-to-webp-converter.webp";
import LeftImageMobile from "/src/assets/Optimized image/Frame60-ezgif.com-png-to-webp-converter.webp";
import RightImageMobile from "/src/assets/Optimized image/Frame601-ezgif.com-png-to-webp-converter.webp";

const Categories = () => {
  return (
    <div className="mx-auto md:py-[90px] py-[59px] px-[30px] md:!px-16">
      {/* Heading */}
      <div className="md:mb-12 mb-[30px]">
        <h1 className="text-[39px] font-semibold text-left text-[#393939]">
          Categories of <span className="text-[#6BA85D]">Pests</span>
        </h1>
      </div>

      {/* Card 1 */}
      <div className="flex flex-col lg:flex-row bg-[#ECF2E6] md:pl-8 md:pt-8 md:pb-8 md:pr-[86px] pl-5 pr-5 pt-5 pb-11 md:mb-16 mb-[38px] rounded-lg gap-5">
        {/* Left Image */}
        <div className="lg:w-2/5 md:mb-0 flex justify-start items-center">
          <img
            src={window.innerWidth < 768 ? LeftImageMobile : LeftImage}
            alt="Pesticide Category"
            className="md:w-[444px] md:h-[391px] h-[273px] w-full"
          />
        </div>
        {/* Right Content */}
        <div className="lg:w-3/5">
          <h2 className="text-[33px] font-semibold mb-2 text-[#393939]">
            Insects
          </h2>
          <p className="mb-11 text-[#949191] text-justify max-w-[740px]">
            Insect pests are one of the most destructive biotic stressors in
            agriculture. Their attacks result in significant yield losses and
            degrade crop quality, leading to reduced market value and economic
            losses for farmers. These pests damage plants by feeding on leaves,
            stems, roots, and fruits, often transmitting diseases in the
            process. To mitigate these effects, farmers must implement effective
            pest management strategies, such as integrated pest management (IPM)
            to safeguard crop health and ensure sustainable agricultural
            productivity.
          </p>

          {/* Images with individual texts */}
          <div className="flex flex-wrap justify-between md:justify-normal md:space-x-14">
            <div className="text-center">
              <img
                src={img1}
                alt="Pesticide Detail"
                className="w-[92px] h-[77px] rounded mb-2"
              />
              <p className="text-[#000] text-[16px] font-normal text-left">
                Sunn Pest
              </p>{" "}
            </div>

            <div className="text-center">
              <img
                src={img2}
                alt="Pesticide Detail"
                className="w-[92px] h-[77px] rounded mb-2"
              />
              <p className="text-[#000] text-[16px] font-normal text-left">
                Rape Beetle
              </p>{" "}
            </div>

            <div className="text-center">
              <img
                src={img3}
                alt="Pesticide Detail"
                className="w-[92px] h-[77px] rounded mb-2"
              />
              <p className="text-[#000] text-[16px] font-normal text-left">
                African Cotton Leaform
              </p>{" "}
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col lg:flex-row-reverse bg-[#ECF2E6] md:pr-8 md:pt-8 md:pb-8 md:pl-[37px] pl-5 pr-5 pt-5 pb-[35px] rounded-lg gap-5">
        {/* Right Image */}
        <div className="lg:w-2/5 lg:mb-0 flex justify-end items-center">
          <img
            src={window.innerWidth < 768 ? RightImageMobile : RightImage}
            alt="Pesticide Category"
            className="md:w-[444px] md:h-[391px] h-[273px] w-full"
          />
        </div>
        {/* Left Content */}
        <div className="lg:w-3/5">
          <h2 className="text-[33px] font-semibold mb-2 text-[#393939]">
            Diseases
          </h2>
          <p className="mb-11 text-justify text-[#949191] max-w-[740px]">
            Plant diseases, often caused by pathogens like fungi, bacteria, and
            viruses, can devastate crops by affecting their growth, yield, and
            quality. Common diseases include Fungal diseases, bacterial diseases
            and viral diseases. These diseases lead to significant agricultural
            losses by stunting plant development, reducing productivity, and
            spoiling the final produce. Fungal infections are common threats
            that farmers face, each requiring targeted management strategies.
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
          <div className="flex flex-wrap justify-between md:justify-normal md:space-x-14">
            {/* First Image and Text */}
            <div className="text-center">
              <img
                src={img4}
                alt="Pesticide Detail"
                className="w-[92px] h-[77px] rounded mb-2"
              />
              <p className="text-[#000] text-[16px] font-normal text-left">
                Wheat Blast
              </p>{" "}
              {/* Text below img1 */}
            </div>

            {/* Second Image and Text */}
            <div className="text-center">
              <img
                src={img5}
                alt="Pesticide Detail"
                className="w-[92px] h-[77px] rounded mb-2"
              />
              <p className="text-[#000] text-[16px] font-normal max-w-44 text-left">
                Tomato Brown Rugose Fruit Disease
              </p>{" "}
              {/* Text below img2 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
