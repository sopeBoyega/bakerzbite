
import { LuStar, LuStarHalf } from "react-icons/lu"; // Import the Lu icons



export default function StarRating({ rating }) {
  const fullStars = Math.floor(rating); // Count of full stars
  const halfStar = rating % 1 !== 0;    // Check if there’s a half star
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining empty stars

  return (
    <div className="flex items-center ">
      {/* Render full stars */}
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <LuStar key={`full-${index}`} className="text-yellow-500 ml-[1px]" fill="#eab308" />
        ))}

      {/* Render half star */}
      {halfStar && <LuStarHalf className="text-yellow-500 ml-[1px]"  />}

      {/* Render empty stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <LuStar key={`empty-${index}`} className="text-yellow-500  text-opacity-30  ml-[1px]" />
        ))}
    </div>
  );
}