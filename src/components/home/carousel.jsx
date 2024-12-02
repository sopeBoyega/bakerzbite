import React, { useRef } from "react";
import { carousel } from "../../assets/assets";

const Carousel = () => {
  const scrollContainerRef = useRef(null);

  const scrollStep = 238; // Item width (230px) + gap (8px)

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -scrollStep,
      behavior: "smooth", // Smooth scrolling
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: scrollStep,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex absolute flex-nowrap gap-7 rounded-full items-center justify-center flex-row w-[955px] h-[201px] bg-white bg-opacity-70 right-0 left-[50%] bottom-0">
      <div className="flex flex-row items-center gap-4">
        <span onClick={scrollLeft} className="cursor-pointer w-[32px] text-bakerzBiteDarkBrown text-2xl">←</span>

        <span onClick={scrollRight} className="cursor-pointer w-[32px] text-bakerzBiteDarkBrown text-2xl">→</span>
      </div>

      <div
        className="flex flex-row overflow-hidden gap-2 justify-center w-[800px] items-center"
        ref={scrollContainerRef}
      >
        {carousel.map((item, key) => (
          <img
            key={key}
            src={item.image}
            alt=""
            className="min-w-[230px] h-[149px] flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
