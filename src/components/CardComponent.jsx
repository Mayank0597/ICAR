import React from "react";
import image1 from "/src/assets/Frame 14.png";
import image2 from "/src/assets/Frame 14 (1).png";
import image3 from "/src/assets/Frame 14 (2).png";
import image4 from "/src/assets/Frame 14 (3).png";
import image5 from "/src/assets/Frame 14 (4).png";
import { Link } from "react-router-dom";

const CardComponent = () => {
  return (
    <div className="bg-[#ECF2E6] py-20 px-4 md:!px-[60px] relative">
      {/* Heading */}
      <h2 className="text-3xl md:text-[39px] font-semibold text-[#393939] mb-11">
        Types of <span className="text-[#6BA85D]">Pesticide</span>
      </h2>
      {/* Card Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="w-full bg-white mb-[60px] rounded">
          <img
            src={image1}
            alt="Card 1"
            className="w-full h-[340px] rounded-t"
          />
          <div className="pb-[42px] pt-3 px-3">
            <h3 className="text-xl font-semibold mb-1 text-[#393939]">Virus</h3>
            <p className="text-[#949191] mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisng elit. Sed do
              eiusmod tempor incididunut labore et dolore magna aliqua.
            </p>
            <Link to="/types#part1">
              <button className="bg-[#6BA85D] text-[#FFF] px-6 py-2 rounded border-2 border-transparent hover:text-[#6BA85D] hover:bg-transparent hover:border-[#6BA85D] transition duration-300">
                View More
              </button>
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full bg-white mb-[60px] rounded">
          <img
            src={image2}
            alt="Card 2"
            className="w-full h-[340px] rounded-t"
          />
          <div className="pb-[42px] pt-3 px-3">
            <h3 className="text-xl font-semibold mb-1 text-[#393939]">
              Bacteria
            </h3>
            <p className="text-[#949191] mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisng elit. Sed do
              eiusmod tempor incididunut labore et dolore magna aliqua.
            </p>
            <Link to="/types#part2">
              <button className="bg-[#6BA85D] text-[#FFF] px-6 py-2 rounded border-2 border-transparent hover:text-[#6BA85D] hover:bg-transparent hover:border-[#6BA85D] transition duration-300">
                View More
              </button>
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full bg-white mb-[60px] rounded">
          <img
            src={image3}
            alt="Card 3"
            className="w-full h-[340px] rounded-t"
          />
          <div className="pb-[42px] pt-3 px-3">
            <h3 className="text-xl font-semibold mb-1 text-[#393939]">
              Insects
            </h3>
            <p className="text-[#949191] mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisng elit. Sed do
              eiusmod tempor incididunut labore et dolore magna aliqua.
            </p>
            <Link to="/types#part3">
              <button className="bg-[#6BA85D] text-[#FFF] px-6 py-2 rounded border-2 border-transparent hover:text-[#6BA85D] hover:bg-transparent hover:border-[#6BA85D] transition duration-300">
                View More
              </button>
            </Link>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full bg-white rounded">
          <img
            src={image4}
            alt="Card 4"
            className="w-full h-[340px] rounded-t"
          />
          <div className="pb-[42px] pt-3 px-3">
            <h3 className="text-xl font-semibold mb-1 text-[#393939]">Weeds</h3>
            <p className="text-[#949191] mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisng elit. Sed do
              eiusmod tempor incididunut labore et dolore magna aliqua.
            </p>
            <Link to="/types#part4">
              <button className="bg-[#6BA85D] text-[#FFF] px-6 py-2 rounded border-2 border-transparent hover:text-[#6BA85D] hover:bg-transparent hover:border-[#6BA85D] transition duration-300">
                View More
              </button>
            </Link>
          </div>
        </div>

        {/* Card 5 */}
        <div className="w-full bg-white rounded">
          <img
            src={image5}
            alt="Card 5"
            className="w-full h-[340px] rounded-t"
          />
          <div className="pb-[42px] pt-3 px-3">
            <h3 className="text-xl font-semibold mb-1 text-[#393939]">
              Plants
            </h3>
            <p className="text-[#949191] mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisng elit. Sed do
              eiusmod tempor incididunut labore et dolore magna aliqua.
            </p>
            <Link to="/types#part5">
              <button className="bg-[#6BA85D] text-[#FFF] px-6 py-2 rounded border-2 border-transparent hover:text-[#6BA85D] hover:bg-transparent hover:border-[#6BA85D] transition duration-300">
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
