import React, { useState } from "react";
import { assets } from "../assets/assets";
import { list } from "postcss";
import { Link } from "react-router-dom";

const Navbar = ({visitorCount}) => {
  const listItems = ["Home", "Gallery", "About", "Contact"];

  const [activeMenu, setActiveMenu] = useState("Home");

  return (
    <div className=" h-[45px] p-5 w-[100vw]  z-[10] flex justify-between  items-center bg-white fixed  top-0 left-0 right-0 ">
      <div className="flex flex-row items-center">
       
        <Link
        to='/'
        className="flex flex-row">
           <p className="text-bakerzBiteDarkBrown  text-[20px] font-medium">
          BakerzBite
        </p>
        <img
          src={assets.doubleChocolate}
          alt="Logo"
          className="w-[35px] h-[35px]"
        />
        </Link>
      </div>
     
      <div>
        <ul className="hidden   md:flex  flex-row gap-x-[20px] list-none  ">
          {listItems.map((item, key) => (
            <Link
              key={key}
              className={` ${activeMenu === item ? "text-[#4A1D1F] font-medium": " text-[#272727]"}  cursor-pointer text-[13px]  `}
              onClick={() => setActiveMenu(item)}
              to={`/${item === "Home" ? "" :item}`}
            >
              {item}
            </Link>
          ))}
        </ul>
      </div>



      <div className=" hidden lg:flex flex-row items-center justify-center mr-10 mb-3">
        <p className=" font-light text-center text-[10px]">Visitor's Count:{!visitorCount ? "Loading" : visitorCount}</p>
      </div>
    </div>
  );
};

export default Navbar;
