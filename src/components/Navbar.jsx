import React, { useState } from "react";
import { assets } from "../assets/assets";
import { list } from "postcss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const listItems = ["Home", "Gallery", "About", "Contact"];

  const [activeMenu, setActiveMenu] = useState("Home");

  return (
    <div className="border h-[65px] border-black w-[100vw]  z-10 flex justify-between around items-center bg-transparent fixed ">
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
     
      <div>
        <ul className="flex  flex-row gap-x-[20px] list-none  ">
          {listItems.map((item, key) => (
            <Link
              key={key}
              className={` ${activeMenu === item ? "text-[#4A1D1F] font-medium": " text-[#272727]"}  cursor-pointer text-[13px] `}
              onClick={() => setActiveMenu(item)}
              to={`/${item}`}
            >
              {item}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flex flex-row items-center justify-center mr-10 mb-3">
        <p className="font-light text-center text-[10px]">Current Page:{activeMenu}</p>
      </div>
    </div>
  );
};

export default Navbar;
