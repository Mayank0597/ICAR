import React from "react";
import image1 from "/src/assets/Optimized image/Frame1411-ezgif.com-png-to-webp-converter.webp";
import image2 from "/src/assets/Optimized image/Frame1412-ezgif.com-png-to-webp-converter.webp";
import image3 from "/src/assets/Optimized image/Frame1413-ezgif.com-png-to-webp-converter.webp";
import image4 from "/src/assets/Optimized image/Frame1414-ezgif.com-png-to-webp-converter.webp";
import image5 from "/src/assets/Optimized image/Frame1415-ezgif.com-png-to-webp-converter.webp";
import { Link } from "react-router-dom";

const CardComponent = () => {
  return (
    // <div className="bg-[#ECF2E6] py-20 px-4 md:!px-[60px] relative">
    //   {/* Heading */}
    //   <h2 className="text-3xl md:text-[39px] font-semibold text-[#393939] mb-11">
    //     Types of Pests
    //   </h2>
    //   {/* Card Container */}
    //   <div className="flex flex-wrap gap-3">
    //     {/* Card 1 */}
    //     <div className="w-[32%] bg-white mb-[60px] rounded">
    //       <img
    //         src={image1}
    //         alt="Card 1"
    //         className="w-full h-[340px] rounded-t"
    //       />
    //       <div className="pb-[42px] pt-3 px-3 flex flex-col h-full max-h-[310px] justify-between">
    //         <div>
    //           <h3 className="text-xl font-semibold text-[#393939]">
    //             Sunn pest (Eurygaster Integriceps Puton)
    //           </h3>
    //           <p className="text-[#949191] text-justify">
    //             Sunn pests are known for their destructive feeding habits on
    //             wheat and other cereal crops, leading to significant yield
    //             losses. They damage plants by sucking sap, which can result in
    //             reduced grain quality and quantity.
    //           </p>
    //         </div>

    //         <Link to="/types#part1">
    //           <button className="bg-[#6BA85D] text-[#FFF] px-6 py-2 rounded border-2 border-transparent hover:text-[#6BA85D] hover:bg-transparent hover:border-[#6BA85D] transition duration-300">
    //             View More
    //           </button>
    //         </Link>
    //       </div>
    //     </div>

    //     {/* Card 2 */}
    //     <div className="w-[32%] bg-white mb-[60px] rounded">
    //       <img
    //         src={image2}
    //         alt="Card 2"
    //         className="w-full h-[340px] rounded-t"
    //       />
    //       <div className="pb-[42px] pt-3 px-3 flex flex-col h-full max-h-[310px] justify-between">
    //         <div>
    //           <h3 className="text-xl font-semibold text-[#393939]">
    //             African cotton leafworm (Spodoptera Littoralis)
    //           </h3>
    //           <p className="text-[#949191] text-justify">
    //             The African cotton leafworm is a major pest of cotton and other
    //             crops, causing severe defoliation and reducing plant vigour.
    //             Their rapid reproduction and voracious feeding habits can lead
    //             to substantial economic losses for farmers.
    //           </p>
    //         </div>
    //         <Link to="/types#part2">
    //           <button className="bg-[#6BA85D] text-[#FFF] px-6 py-2 rounded border-2 border-transparent hover:text-[#6BA85D] hover:bg-transparent hover:border-[#6BA85D] transition duration-300">
    //             View More
    //           </button>
    //         </Link>
    //       </div>
    //     </div>

    //     {/* Card 3 */}
    //     <div className="w-[32%] bg-white mb-[60px] rounded">
    //       <img
    //         src={image3}
    //         alt="Card 3"
    //         className="w-full h-[340px] rounded-t"
    //       />
    //       <div className="pb-[42px] pt-3 px-3 flex flex-col h-full max-h-[310px] justify-between">
    //         <div>
    //           <h3 className="text-xl font-semibold text-[#393939]">
    //             Rape beetle (Meligethes aeneus)
    //           </h3>
    //           <p className="text-[#949191] text-justify">
    //             Rape beetles are particularly harmful to canola and rapeseed
    //             crops, where they feed on the leaves and buds. Their
    //             infestations can result in stunted growth and lower seed
    //             production, negatively impacting overall crop yield.
    //           </p>
    //         </div>
    //         <Link to="/types#part3">
    //           <button className="bg-[#6BA85D] text-[#FFF] px-6 py-2 mt-4 rounded border-2 border-transparent hover:text-[#6BA85D] hover:bg-transparent hover:border-[#6BA85D] transition duration-300">
    //             View More
    //           </button>
    //         </Link>
    //       </div>
    //     </div>

    //     {/* Card 4 */}
    //     <div className="w-[32%] bg-white rounded">
    //       <img
    //         src={image4}
    //         alt="Card 4"
    //         className="w-full h-[340px] rounded-t"
    //       />
    //       <div className="pb-[42px] pt-3 px-3 flex flex-col h-full max-h-[310px] justify-between">
    //         <div>
    //           <h3 className="text-xl font-semibold text-[#393939]">
    //             Wheat Blast (Magnaporthe oryzae pathotype Triticum)
    //           </h3>
    //           <p className="text-[#949191] text-justify">
    //             Wheat blast is a devastating fungal disease that affects wheat
    //             crops, leading to severe yield reductions and compromised grain
    //             quality. The disease spreads rapidly under favourable
    //             conditions, making early detection and management essential.
    //           </p>
    //         </div>
    //         <Link to="/types#part4">
    //           <button className="bg-[#6BA85D] text-[#FFF] px-6 py-2 rounded border-2 border-transparent hover:text-[#6BA85D] hover:bg-transparent hover:border-[#6BA85D] transition duration-300">
    //             View More
    //           </button>
    //         </Link>
    //       </div>
    //     </div>

    //     {/* Card 5 */}
    //     <div className="w-[32%] bg-white rounded">
    //       <img
    //         src={image5}
    //         alt="Card 5"
    //         className="w-full h-[340px] rounded-t"
    //       />
    //       <div className="pb-[42px] pt-3 px-3 flex flex-col h-full max-h-[310px] justify-between">
    //         <div>
    //           <h3 className="text-xl font-semibold text-[#393939]">
    //             Tomato brown rugose fruit disease (ToBRFV)
    //           </h3>
    //           <p className="text-[#949191] text-justify">
    //             Tomato brown rugose fruit disease is caused by a virus that
    //             leads to severe deformities in tomato fruits, resulting in
    //             significant economic losses. The disease is spread through
    //             insect vectors and contaminated tools.
    //           </p>
    //         </div>
    //         <Link to="/types#part5">
    //           <button className="bg-[#6BA85D] text-[#FFF] px-6 py-2 mt-4 rounded border-2 border-transparent hover:text-[#6BA85D] hover:bg-transparent hover:border-[#6BA85D] transition duration-300">
    //             View More
    //           </button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="bg-[#ECF2E6] relative py-20 md:px-5 px-[30px]">
        <h2 className="text-[33px] md:text-[39px] font-semibold text-[#393939] mb-11">
          Types of <span className="text-[#6BA85D]">Pests</span>
        </h2>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <div className="md:w-[32%] w-full flex flex-col md:mb-0 mb-[60px]">
            <img src={image1} className="rounded-t-md" alt="" />
            <div className="flex flex-col justify-between px-4 pt-4 pb-12 bg-[#ffffff] min-h-[350px] rounded-b-md">
              <div className="flex flex-col gap-1">
                <h5 className="text-[#000] font-semibold text-[19px]">
                  Sunn Pest (Eurygaster Integriceps Puton)
                </h5>
                <p className="text-[#949191] font-normal text-[16px]">
                  Sunn pests are known for their destructive feeding habits on
                  wheat and other cereal crops, leading to significant yield
                  losses. They damage plants by sucking sap, which can result in
                  reduced grain quality and quantity.
                </p>
              </div>
              <div className="flex">
                {/* <Link className="px-12 py-3 bg-[#6BA85D] text-[#ffffff] text-[16px] font-semibold rounded">
                  View More
                </Link> */}
                <Link to="/types#part1">
                  <button className="bg-[#6BA85D] text-[#FFF] px-6 py-2 font-semibold rounded border-2 border-transparent hover:text-[#6BA85D] hover:bg-transparent hover:border-[#6BA85D] transition duration-300">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-[32%] w-full flex flex-col md:mb-0 mb-[60px]">
            <img src={image2} className="rounded-t-md" alt="" />
            <div className="flex flex-col justify-between px-4 pt-4 pb-12 bg-[#ffffff] min-h-[350px] rounded-b-md">
              <div className="flex flex-col gap-1">
                <h5 className="text-[#000] font-semibold text-[19px]">
                  African Cotton Leafworm (Spodoptera Littoralis)
                </h5>
                <p className="text-[#949191] font-normal text-[16px]">
                  The African cotton leafworm is a major pest of cotton and
                  other crops, causing severe defoliation and reducing plant
                  vigour. Their rapid reproduction and voracious feeding habits
                  can lead to substantial economic losses for farmers.
                </p>
              </div>
              <div className="flex">
                {/* <Link className="px-12 py-3 bg-[#6BA85D] text-[#ffffff] text-[16px] font-semibold rounded">
                  View More
                </Link> */}
                <Link to="/types#part2">
                  <button className="bg-[#6BA85D] text-[#FFF] px-6 py-2 font-semibold rounded border-2 border-transparent hover:text-[#6BA85D] hover:bg-transparent hover:border-[#6BA85D] transition duration-300">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-[32%] w-full flex flex-col md:mb-0 mb-[60px]">
            <img src={image3} className="rounded-t-md" alt="" />
            <div className="flex flex-col justify-between px-4 pt-4 pb-12 bg-[#ffffff] min-h-[350px] rounded-b-md">
              <div className="flex flex-col gap-1">
                <h5 className="text-[#000] font-semibold text-[19px]">
                  Rape Beetle (Meligethes Aeneus)
                </h5>
                <p className="text-[#949191] font-normal text-[16px]">
                  Rape beetles are particularly harmful to canola and rapeseed
                  crops, where they feed on the leaves and buds. Their
                  infestations can result in stunted growth and lower seed
                  production, negatively impacting overall crop yield.
                </p>
              </div>
              <div className="flex">
                {/* <Link className="px-12 py-3 bg-[#6BA85D] text-[#ffffff] text-[16px] font-semibold rounded">
                  View More
                </Link> */}
                <Link to="/types#part3">
                  <button className="bg-[#6BA85D] text-[#FFF] px-6 py-2 font-semibold rounded border-2 border-transparent hover:text-[#6BA85D] hover:bg-transparent hover:border-[#6BA85D] transition duration-300">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-[32%] w-full flex flex-col md:mb-0 mb-[60px]">
            <img src={image4} className="rounded-t-md" alt="" />
            <div className="flex flex-col justify-between px-4 pt-4 pb-12 bg-[#ffffff] min-h-[350px] rounded-b-md">
              <div className="flex flex-col gap-1">
                <h5 className="text-[#000] font-semibold text-[19px]">
                  Wheat Blast (Magnaporthe Oryzae Pathotype Triticum)
                </h5>
                <p className="text-[#949191] font-normal text-[16px]">
                  Wheat blast is a devastating fungal disease that affects wheat
                  crops, leading to severe yield reductions and compromised
                  grain quality. The disease spreads rapidly under favourable
                  conditions, making early detection and management essential.
                </p>
              </div>
              <div className="flex">
                {/* <Link className="px-12 py-3 bg-[#6BA85D] text-[#ffffff] text-[16px] font-semibold rounded">
                  View More
                </Link> */}
                <Link to="/types#part4">
                  <button className="bg-[#6BA85D] text-[#FFF] px-6 py-2 font-semibold rounded border-2 border-transparent hover:text-[#6BA85D] hover:bg-transparent hover:border-[#6BA85D] transition duration-300">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-[32%] w-full flex flex-col">
            <img src={image5} className="rounded-t-md" alt="" />
            <div className="flex flex-col justify-between px-4 pt-4 pb-12 bg-[#ffffff] min-h-[350px] rounded-b-md">
              <div className="flex flex-col gap-1">
                <h5 className="text-[#000] font-semibold text-[19px]">
                  Tomato Brown Rugose Fruit Disease (ToBRFV)
                </h5>
                <p className="text-[#949191] font-normal text-[16px]">
                  Tomato brown rugose fruit disease is caused by a virus that
                  leads to severe deformities in tomato fruits, resulting in
                  significant economic losses. The disease is spread through
                  insect vectors and contaminated tools.
                </p>
              </div>
              <div className="flex">
                {/* <Link className="px-12 py-3 bg-[#6BA85D] text-[#ffffff] text-[16px] font-semibold rounded">
                  View More
                </Link> */}
                <Link to="/types#part5">
                  <button className="bg-[#6BA85D] text-[#FFF] px-6 py-2 font-semibold rounded border-2 border-transparent hover:text-[#6BA85D] hover:bg-transparent hover:border-[#6BA85D] transition duration-300">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
