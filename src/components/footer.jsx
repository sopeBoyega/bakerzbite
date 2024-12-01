import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
    const  footerLinks =["Site Map","Gallery","About Us","Contact Us","FAQ Link"]
  return (
    <div className="w-[100vw] flex flex-col mt-[100px] py-[80px]  bg-bakerzBiteLightBrown h-[300px]">
      <div className="flex flex-row mx-[8vw] items-center justify-between ">
        <div className="flex flex-row items-center">
          <p className="text-bakerzBiteDarkBrown  text-[20px] font-medium">
            BakerzBite
          </p>
          <img
            src={assets.doubleChocolate}
            alt="Logo"
            className="w-[35px] h-[35px]"
          />
        </div>
     <ul className="grid grid-cols-2 gap-3 md:grid-cols-3  lg:grid-cols-5 lg:gap-[20px]">
   {footerLinks.map((item,key) => (
    <li className="font-medium cursor-pointer  text-[10px] hover:underline">{item}</li>
   ))}
     </ul>
      </div>
      <hr className="border-[0.5px] border-[#4A1D1F] w-full border-opacity-20  my-5" />
      <div className="flex flex-row items-center mx-[4vw] justify-between">
        <div className="flex flex-col gap-3 font-medium text-[14px]">
            <p>2024 BakerzBite. All Rights reserved</p>
            <ul className="text-[14px]">
                <li className="mb-1">Terms and Condition</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="grid grid-cols-3 gap-5 mr-8 md:grid-cols-5 lg:gap-12 lg:mr-20">
            <img src={assets.facebookIcon} alt="" />
            <img src={assets.linkedinIcon} alt="" />
            <img src={assets.instagramIcon} alt="" />
            <img src={assets.githubIcon} alt="" />
            <img src={assets.linkedinIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
