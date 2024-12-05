import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ listItems }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        className="fixed top-2 right-5 z-[100] bg-[#4A1D1F] text-[#FBEDCD] font-medium text-[12px] px-4 py-2 rounded-md md:hidden"
        onClick={() => setShowSidebar(true)} // Show sidebar
      >
        ☰ Menu
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#FBEDCD] shadow-md w-[300px] transform ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-[#4A1D1F] font-medium text-[20px]"
          onClick={() => setShowSidebar(false)} // Hide sidebar
        >
          ✕
        </button>

        <div className="mt-16">
          <h2 className="text-[#4A1D1F] font-bold text-[22px] px-6">Menu</h2>
          <ul className="flex flex-col mt-6 gap-6 px-6">
            {listItems.map((item, key) => (
              <Link
                key={key}
                className="text-[#4A1D1F] cursor-pointer text-[18px] font-medium hover:pl-2 transition-all duration-200 ease-in-out"
                onClick={() => setShowSidebar(false)} // Close sidebar after clicking
                to={`/${item === "Home" ? "" : item}`}
              >
                {item}
              </Link>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {showSidebar && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
          onClick={() => setShowSidebar(false)} // Close sidebar
        ></div>
      )}
    </>
  );
};

export default Sidebar;
