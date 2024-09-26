import React from "react";
import locationIcon from "/src/assets/ion_location-outline.png";
import phoneIcon from "/src/assets/fluent_call-48-regular.png";
import emailIcon from "/src/assets/fluent_call-48-regular (1).png";

const GetInTouch = () => {
  return (
    <div className="bg-[#F0F5EB] py-[71px] px-4 md:px-20 flex flex-col md:flex-row justify-between items-center">
      {/* Left Side - Contact Info */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0 md:ml-[90px]">
        <h2 className="text-3xl md:text-[46px] font-semibold mb-12 text-[#393939]">
          <span className="text-[#6BA85D]">Get in Touch </span>
          with Us!
        </h2>

        {/* Address */}
        <div className="flex items-start mb-[61px]">
          <img
            src={locationIcon}
            alt="Location Icon"
            className="w-5 h-[30px] mr-4"
          />
          <div>
            <h3 className="text-2xl font-semibold text-[#6BA85D]">Address</h3>
            <p className="text-[#393939] text-[19px] font-medium">
              Dhamtari Road, Abhanpur, Chhattisgarh
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start mb-[61px]">
          <img
            src={phoneIcon}
            alt="Phone Icon"
            className="w-[23px] h-[30px] mr-4"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-1 text-[#6BA85D]">
              Phone
            </h3>
            <p className="text-[#393939] text-[19px] font-medium">
              +91 97523-24111
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
            <h3 className="text-2xl font-semibold mb-1 text-[#6BA85D]">
              Email
            </h3>
            <p className="text-[#393939] text-[19px] font-medium">
              hello@houseofbastar.com
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <form className="">
        <div className="bg-[#6BA85D] w-full md:w-[629px] h-auto md:h-[605px] p-8 md:py-[60px] md:pl-[54px] md:pr-[39px] md:mr-[47px] rounded-lg flex flex-col gap-4">
          {/* Name */}
          <div>
            {/* <label className="block text-white font-semibold mb-2">Name</label> */}
            <input
              type="text"
              className="w-full py-3 px-6 rounded-lg bg-[#6BA85D] text-[#FFFFFF] border border-[#C9C9C9] placeholder:text-white"
              placeholder="Name"
            />
          </div>

          {/* Email */}
          <div>
            {/* <label className="block text-white font-semibold mb-2">Email</label> */}
            <input
              type="email"
              className="w-full p-3 px-6 rounded-lg bg-[#6BA85D] text-[#FFFFFF] border border-[#C9C9C9] placeholder:text-white"
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
              className="w-full p-3 px-6 rounded-lg bg-[#6BA85D] text-[#FFFFFF] border border-[#C9C9C9] placeholder:text-white"
              placeholder="Phone Number"
            />
          </div>

          {/* Message */}
          <div>
            {/* <label className="block text-white font-semibold mb-2">
              Write a Message
            </label> */}
            <textarea
              className="w-full py-5 px-6 rounded-lg bg-[#6BA85D] text-[#FFFFFF] border border-[#C9C9C9] placeholder:text-white h-48 mb-12"
              placeholder="Your Message"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full bg-[#C5E9C3] text-[#0F5A0A] py-3 px-8 rounded font-semibold hover:bg-gray-200 transition duration-300 ease-in-out">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
