import React from "react";
import { assets } from "../../assets/assets";
import Carousel from "./carousel";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r relative my-[30px] mx-auto from-[#FFFFFF] to-[#FDF5E3] overflow-hidden flex items-center justify-center flex-col  min-h-[80vh] md:flex-row md:justify-between md:minh-screen ">
      <div className="flex flex-col justify-center w-full items-center md:items-start md:p-5 ">
        <div className="">
          <p className="font-sans font-bold text-[44px]  text-bakerzBiteDarkBrown">
            BakerzBite
          </p>
        </div>
        <p className="font-sans  text-[24px]  text-bakerzBiteDarkBrown">
          Where Smiles are Served Daily
        </p>
        <div className="flex mt-5 flex-row gap-1 md:mt-10">
          <button className="text-white bg-bakerzBiteDarkBrown w-[156px] h-[40px] rounded-[4px]  "
           onClick={()=>navigate('/contact')}>
            Reach Out To Us
          </button>
          <button className="bg-transparent border border-bakerzBiteDarkBrown rounded-[4px] w-[156px] h-[40px]"
           onClick={()=>navigate('/gallery')}
          >
            See All Menus
          </button>
        </div>
      </div>
      <div className="hidden md:flex">
        <img
          src={assets.chocoCake}
          alt="Chocolate Cake"
          className="w-[1000px] h-[532px] bg-black "
        />
      </div>
      <div className="hidden md:flex">
        <Carousel />
      </div>
    </div>
  );
};

export default Header;
