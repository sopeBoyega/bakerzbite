import React from "react";

const Filter = ({ category, setCategory }) => {
  const categories = ["cake", "cookie", "pie", "pastry", "Your Favorites"];
  console.log(category);
  return (
    <div className="hidden md:flex flex-row items-center w-1/2 justify-between  border-b-bakerzBiteDarkBrown gap-x-[50px]">
      {categories.map((item, key) => (
        <div
          className={`${item === category && "border-[1.5px] border-bakerzBiteDarkBrown rounded-[10px] font-bold"} capitalize p-[5px] cursor-pointer hover:font-bold`}
          key={key}
          onClick={() => {
            setCategory((prev) => (prev === item ? "All" : item));
          }}
        >
          <p className="text-[15.5px] text-bakerzBiteDarkBrown ">{item}</p>
        </div>
      ))}
      <p>{category}</p>
    </div>
  );
};

export default Filter;
