import React from "react";
import image1 from "/src/assets/Optimized image/Frame145-ezgif.com-png-to-webp-converter.webp";
import image2 from "/src/assets/Optimized image/Frame146-ezgif.com-png-to-webp-converter.webp";
import image3 from "/src/assets/Optimized image/Frame147-ezgif.com-png-to-webp-converter.webp";
import image4 from "/src/assets/Optimized image/Frame148-ezgif.com-png-to-webp-converter.webp";
import image5 from "/src/assets/Optimized image/Frame149-ezgif.com-png-to-webp-converter.webp";
import { Link } from "react-router-dom";

const CardComponent = () => {
  return (
    <div className="bg-[#ECF2E6] py-20 px-4 md:!px-[60px] relative">
      {/* Heading */}
      <h2 className="text-3xl md:text-[39px] font-semibold text-[#393939] mb-11">
        Types of Pests
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
            <h3 className="text-xl font-semibold mb-1 text-[#393939]">
              Sunn pest (Eurygaster Integriceps Puton)
            </h3>
            <p className="text-[#949191] mb-8 text-justify">
              Sunn pests are known for their destructive feeding habits on wheat
              and other cereal crops, leading to significant yield losses. They
              damage plants by sucking sap, which can result in reduced grain
              quality and quantity.
            </p>
            <Link to="/types#part1">
              <button className="bg-[#6BA85D] text-[#FFF] px-6 py-2 mt-4 rounded border-2 border-transparent hover:text-[#6BA85D] hover:bg-transparent hover:border-[#6BA85D] transition duration-300">
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
              African cotton leafworm (Spodoptera Littoralis)
            </h3>
            <p className="text-[#949191] mb-8 text-justify">
              The African cotton leafworm is a major pest of cotton and other
              crops, causing severe defoliation and reducing plant vigour. Their
              rapid reproduction and voracious feeding habits can lead to
              substantial economic losses for farmers.
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
              Rape beetle (Meligethes aeneus)
            </h3>
            <p className="text-[#949191] mb-8 text-justify">
              Rape beetles are particularly harmful to canola and rapeseed
              crops, where they feed on the leaves and buds. Their infestations
              can result in stunted growth and lower seed production, negatively
              impacting overall crop yield.
            </p>
            <Link to="/types#part3">
              <button className="bg-[#6BA85D] text-[#FFF] px-6 py-2 mt-4 rounded border-2 border-transparent hover:text-[#6BA85D] hover:bg-transparent hover:border-[#6BA85D] transition duration-300">
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
            <h3 className="text-xl font-semibold mb-1 text-[#393939]">
              Wheat Blast (Magnaporthe oryzae pathotype Triticum)
            </h3>
            <p className="text-[#949191] mb-8 text-justify">
              Wheat blast is a devastating fungal disease that affects wheat
              crops, leading to severe yield reductions and compromised grain
              quality. The disease spreads rapidly under favourable conditions,
              making early detection and management essential.
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
              Tomato brown rugose fruit disease (ToBRFV)
            </h3>
            <p className="text-[#949191] mb-8 text-justify">
              Tomato brown rugose fruit disease is caused by a virus that leads
              to severe deformities in tomato fruits, resulting in significant
              economic losses. The disease is spread through insect vectors and
              contaminated tools.
            </p>
            <Link to="/types#part5">
              <button className="bg-[#6BA85D] text-[#FFF] px-6 py-2 mt-4 rounded border-2 border-transparent hover:text-[#6BA85D] hover:bg-transparent hover:border-[#6BA85D] transition duration-300">
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
