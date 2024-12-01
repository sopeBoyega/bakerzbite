import React from "react";
import { productsCarousel } from "../../assets/assets";
import StarRating from "./star-rating";

const Products = () => {
  return (
    <div className="flex flex-col  my-[80px] gap h-[34vw] ">
      <div className="flex flex-col m-[30px] items-center justify-center md:flex-row ">
        <p className="font-bold text-[28px] mb-[10px] text-bakerzBiteDarkBrown md:mr-[100px]">
          Our Products
        </p>
        <hr className="  border-[0.5px]  border-bakerzBiteDarkBrown w-1/2 border-opacity-40 md:w-0 h-full md:mr-[30px]" />
        <p className="font-regular text-[11px] mt-2 md:hidden">
          Our Finest just for You🧁
        </p>
        <p className="hidden w-[500px] md:flex">
          Here’s our best creations that everyone loves. Lightness and sweetness
          of the cake make you want more and more. Start from cake, bread and
          other creations.
        </p>
      </div>
      <div className=" hidden  lg:flex flex-row gap-20  ml-[75px] mt-[50px]  ">
        {productsCarousel.map((item, key) => (
          <div className="flex flex-col  items-center justify-center ">
            <img src={item.image} alt="" className="w-[300px] h-[200px]" />
            <p>{item.productName}</p>
            <div className="flex flex-row items-center  justify-between w-full ">
              <StarRating rating={item.rating} />
              <p className="text-[#707070] text-[14px]">
                {item.rating.toFixed(1)} Rating
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full mt-[45px]"><button className='bg-transparent border border-bakerzBiteDarkBrown rounded-[4px] w-[156px] h-[40px]'>See All Menus</button></div>
    </div>
  );
};

export default Products;
