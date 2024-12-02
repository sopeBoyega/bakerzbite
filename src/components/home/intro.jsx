import React from "react";
import { assets } from "../../assets/assets";

const Introduction = () => {
  return (
    <div className="flex flex-col w-[100%] h-[950px] justify-center items-center ">
      <div className="flex flex-col items-center justify-start w-full h-[45%] lg:flex-row lg:justify-between lg:mt-13">
        <div className="flex flex-col gap-2 pl-[30px] mt-[10px] items-center h-full lg:justify-start lg:items-start">
          <p className="font-medium  text-[23px] mb-[10px] text-bakerzBiteDarkBrown md:mr-[80px] lg:text-[40px]">
            We Bake for you Fresh From the oven
          </p>
          <p className=" text-center text-[19px] mb-[10px] text-[#272727]  lg:w-[500px] lg:text-start">
            We use quality materials that we get directly from farmers. our
            backers are exeperienced people in the food sector. So that the
            products we produce are guaranteed quality and taste. It’s so
            delicious, you have to try it!
          </p>
          <p className="lg:text-start">
            Read More{" "}
            <span className="cursor-pointer w-[32px] text-bakerzBiteDarkBrown text-2xl">
              →
            </span>
          </p>
        </div>
        <div className=" flex items-center justify-center">
          <img
            src={assets.introPicture}
            alt="Our Production"
            className="w-1/2 lg:w-full"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse items-center justify-start w-full h-[45%] lg:flex-row-reverse lg:justify-center lg:mt-13">
        <div className="flex flex-col gap-2 pl-[0px] mt-[10px] items-center h-full lg:justify-start lg:items-start lg:pl-[7px] lg:pt-5">
          <p className="font-medium  text-[23px] mb-[10px] text-bakerzBiteDarkBrown md:mr-[100px] lg:text-[40px]">
            Come and choose your favourites
          </p>
          <p className=" text-center text-[19px] mb-[10px] text-[#272727]  lg:w-[600px] lg:text-start ">
            Try to come to our shop directly to enjoy the delicious taste of the
            cake that just came out of the oven. While enjoying it with a cup of
            coffee or tea in our very convenient shop. very suitable for
            chatting, meeting with your team.
          </p>
          <p className="">
            Read More{" "}
            <span className="cursor-pointer w-[32px] text-bakerzBiteDarkBrown text-2xl">
              →
            </span>
          </p>
        </div>
        <div className=" flex items-center justify-center">
          <img
            src={assets.introPicture}
            alt="Our Production"
            className="w-1/2 lg:w-full"
          />
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Introduction;
