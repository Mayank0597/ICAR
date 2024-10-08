import React from "react";
import locationIcon from "/src/assets/ion_location-outline.png";
import phoneIcon from "/src/assets/fluent_call-48-regular.png";
import emailIcon from "/src/assets/fluent_call-48-regular (1).png";

const GetInTouch = () => {
  return (
    <div className="bg-[#F0F5EB] py-[71px] px-0 md:px-20 flex flex-col md:flex-row justify-between items-center">
      {/* Left Side - Contact Info */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0 md:ml-[90px] md:px-0 px-[30px]">
        <h2 className="text-[33px] md:text-[46px] font-semibold mb-12 text-[#393939]">
          <span className="text-[#6BA85D]">Get in Touch </span>
          with Us!
        </h2>

        {/* Address */}
        <div className="flex items-start md:mb-[61px] mb-10">
          <img
            src={locationIcon}
            alt="Location Icon"
            className="w-5 h-[30px] mr-4"
          />
          <div>
            <h3 className="md:text-2xl text-[19px] font-semibold text-[#6BA85D]">Address</h3>
            <p className="text-[#393939] md:text-[19px] text-base font-medium">
              9RJG+564, Baronda, Chhattisgarh 493225
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start md:mb-[61px] mb-10">
          <img
            src={phoneIcon}
            alt="Phone Icon"
            className="w-[23px] h-[30px] mr-4"
          />
          <div>
            <h3 className="md:text-2xl text-[19px] font-semibold mb-1 text-[#6BA85D]">
              Phone
            </h3>
            <p className="text-[#393939] md:text-[19px] text-base font-medium">
              077122 25352
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start">
          <img
            src={emailIcon}
            alt="Email Icon"
            className="w-[30px] h-[25px] mr-4"
          />
          <div>
            <h3 className="md:text-2xl text-[19px] font-semibold mb-1 text-[#6BA85D]">
              Email
            </h3>
            <p className="text-[#393939] md:text-[19px] text-base font-medium">
              demo@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <form className="w-full md:w-auto">
        <div className="bg-[#6BA85D] w-full md:w-[629px] h-auto md:h-[605px] p-8 md:py-[60px] md:pl-[54px] md:pr-[39px] md:mr-[47px] rounded-lg flex flex-col gap-3">
          {/* Name */}
          <div>
            {/* <label className="block text-white font-semibold mb-2">Name</label> */}
            <input
              type="text"
              className="w-full md:py-2 py-3 px-6 rounded-lg bg-[#6BA85D] text-[#FFFFFF] border-[1.5px] border-[#C9C9C9] placeholder:text-[#ECECEC] focus:outline-none focus:!border-[#FFFFFF] focus:!border-[1.5px]"
              placeholder="Name"
            />
          </div>

          {/* Email */}
          <div>
            {/* <label className="block text-white font-semibold mb-2">Email</label> */}
            <input
              type="email"
              className="w-full md:py-2 py-3 px-6 rounded-lg bg-[#6BA85D] text-[#FFFFFF] border-[1.5px] border-[#C9C9C9] placeholder:text-[#ECECEC] focus:outline-none focus:!border-[#FFFFFF] focus:!border-[1.5px]"
              placeholder="Email"
            />
          </div>

          {/* Phone Number */}
          <div>
            {/* <label className="block text-white font-semibold mb-2">
              Phone Number
            </label> */}
            <input
              type="tel"
              className="w-full md:py-2 py-3 px-6 rounded-lg bg-[#6BA85D] text-[#FFFFFF] border-[1.5px] border-[#C9C9C9] placeholder:text-[#ECECEC] focus:outline-none focus:!border-[#FFFFFF] focus:!border-[1.5px]"
              placeholder="Phone Number"
            />
          </div>

          {/* Message */}
          <div>
            {/* <label className="block text-white font-semibold mb-2">
              Write a Message
            </label> */}
            <textarea
              className="w-full py-3 px-6 rounded-lg bg-[#6BA85D] text-[#FFFFFF] border-[1.5px] border-[#C9C9C9] placeholder:text-[#ECECEC] focus:outline-none focus:!border-[#FFFFFF] focus:!border-[1.5px] md:h-48 h-52 md:mb-12 mb-11"
              placeholder="Write a Message"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full bg-[#0F5A0A] text-[#FFFFFF] md:py-2 py-3 px-8 rounded font-semibold border-[1.5px] border-transparent md:hover:text-[#0F5A0A] md:hover:bg-transparent md:hover:border-[#0F5A0A] transition duration-300">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
