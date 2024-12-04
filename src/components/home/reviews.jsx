import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";

const reviews = [
  {
    text: "The eggless cakes here are really good. Had ordered a Kit Kat cake which was really good. Surely worth a try.",
    name: "Daren Dunlap",
    position: "CEO & Founder at Flex.co",
    profilePic: assets.profilepic, // Ensure this points to the right profile image
  },
  {
    text: "Their red velvet cake is the best I've ever tasted. Would definitely recommend it to everyone!",
    name: "Sophia Carter",
    position: "Blogger at Foodies Paradise",
    profilePic: assets.profilepic, // Another profile picture
  },
  {
    text: "Great customer service and delicious desserts. Always a pleasure ordering from here.",
    name: "John Smith",
    position: "Designer at CreateStudio",
    profilePic: assets.profilepic, // Another profile picture
  },
];

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  // Change review every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handleDotClick = (index) => {
    setCurrentReview(index);
  };

  return (
    <div className="w-full h-[682px] flex flex-col gap-2 bg-white items-center justify-center">
      <div className="flex items-center justify-center w-[74px] h-[1px] rounded-[32px] p-4 bg-bakerzBiteLightBrown lg:h-[16px]">
        <p className="font-medium text-[10px]">QUOTES</p>
      </div>
      <div>
        <img
          src={assets.openingQuote}
          alt=""
          className="absolute z-0 left-0 lg:left-[300px]"
        />
        <p className="text-center font-semibold text-[26px] z-20 relative md:text-[36px] mt-[50px] lg:w-[790px]">
          {reviews[currentReview].text}
        </p>
        <img
          src={assets.closingQuote}
          alt=""
          className="absolute z-0 right-0 mt-[-30px] lg:right-[300px]"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-3 mt-7">
        <img
          src={reviews[currentReview].profilePic}
          alt=""
          className="w-12"
        />
        <p className="font-semibold text-[20px] text-bakerzBiteDarkBrown">
          {reviews[currentReview].name}
        </p>
        <p className="font-medium text-[15px] text-[#272727]">
          {reviews[currentReview].position}
        </p>
      </div>
      <div className="flex flex-row gap-5 mt-5">
        {reviews.map((_, index) => (
          <div
            key={index}
            className={`w-[12px] h-[12px] rounded-full ${
              currentReview === index
                ? "bg-bakerzBiteDarkBrown"
                : "bg-bakerzBiteLightBrown"
            } cursor-pointer`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
