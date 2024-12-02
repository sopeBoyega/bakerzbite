import React from "react";
import { assets } from "../../assets/assets";

const Reviews = () => {
  return (
    <div className="w-full h-[682px] flex flex-col gap-2  bg-white items-center justify-center  ">
      <div className="flex items-center justify-center w-[74px] h-[1px] rounded-[32px] p-4 bg-bakerzBiteLightBrown  lg:h-[16px]">
        <p className="font-medium text-[10px]">QUOTES</p>
      </div>
      <div>
        <img
          src={assets.openingQuote}
          alt=""
          className="absolute  z-0 left-0 lg:left-[300px]"
        />
        <p
          className="text-center font-semibold
       text-[26px] z-5 relative md:text-[36px] mt-[50px] lg:w-[790px]"
        >
          the eggless cakes here are really good. Had ordered a kit kat cake
          which was really good. Surely worth a try.
        </p>
        <img
          src={assets.closingQuote}
          alt=""
          className="absolute  z-0 right-0 mt-[-30px]  lg:right-[300px]"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-3 mt-7">
        <img src={assets.profilepic} alt="" 
        className="w-12"/>
        <p className="font-semibold text-[20px] text-bakerzBiteDarkBrown">Daren Dunlap</p>
        <p className="font-medium text-[15px] text-[#272727]">CEO & Founder at Flex.co</p>
      </div>
      <div className="flex flex-row gap-5 mt-5">
        <div className="w-[12px] h-[12px] rounded-full bg-bakerzBiteLightBrown"></div>
        <div className="w-[12px] h-[12px] rounded-full bg-bakerzBiteDarkBrown"></div>
        <div className="w-[12px] h-[12px] rounded-full bg-bakerzBiteLightBrown"></div>
      </div>
    </div>
  );
};

export default Reviews;
