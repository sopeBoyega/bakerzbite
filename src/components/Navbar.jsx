import React, { useState } from "react";
import { assets } from "../assets/assets";
import { list } from "postcss";

const Navbar = () => {
  const listItems = ["Home", "Gallery", "About Us", "Contact Us"];

  const [activeMenu, setActiveMenu] = useState("Home");

  return (
    <div className="border h-[75px] border-black w-[100vw]  z-10 flex justify-between around m-2 items-center bg-transparent fixed ">
      <div className="flex flex-row items-center">
        <p className="text-bakerzBiteDarkBrown  text-[30px] font-medium">
          BakerzBite
        </p>
        <img
          src={assets.doubleChocolate}
          alt="Logo"
          className="w-[45px] h-[45px]"
        />
      </div>
     
      <div>
        <ul className="flex  flex-row gap-x-[20px] list-none  ">
          {listItems.map((item, key) => (
            <li
              key={key}
              className={` ${activeMenu === item ? "text-[#4A1D1F] font-medium": " text-[#272727]"}  cursor-pointer text-[16px] `}
              onClick={() => setActiveMenu(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-row items-center justify-center mr-10 mb-3">
        <p className="font-light text-center text-[20px]">Visitor Count:{activeMenu}</p>
      </div>
    </div>
  );
};

export default Navbar;
