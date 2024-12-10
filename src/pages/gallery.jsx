import React, { useState } from "react";
import Filter from "../components/gallery/filter";
import Products from "../components/gallery/products-display";
import Menu from "../components/filter-phone";
import FilterPhone from "../components/filter-phone";

const Gallery = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className="bg-bakerzBiteLightBrown w-[100vw] h-fit flex items-center p-6 flex-col justify-start pt-[70px]">
      <p className="font-medium text-center text-[28px] md:text-[30px]">
        Welcome to Our Gallery
      </p>
      <p className="font-medium w-[80vw] m-3  lg:w-[721px] h-[79px]  text-[12px]  md:text-[10px] text-center text-black">
        Take a peek at our delicious creations. From classic cakes to artisanal
        breads, we bake with love and passion. Every bite is a taste of our
        dedication to quality and flavor
      </p>
      <div className="w-full h-fit  flex-col flex pt-[10px] items-center justify-center
       bg-white">
       <div className="flex w-full justify-end items-end lg:justify-center">
       <Filter category={category} setCategory={setCategory}/>
       <FilterPhone category={category} setCategory={setCategory}/>
       </div>
      <Products category={category}/>
      </div>
     
    </div>
  );
};

export default Gallery;
