import React, { useState, useEffect } from "react";

const BottomTicker = ({location}) => {

  const [dateTime, setDateTime] = useState("");

  // Get user's location using Geolocation API
 

  // Update date and time dynamically
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setDateTime(now.toLocaleString());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-bakerzBiteDarkBrown text-white py-2">
      <div className="whitespace-nowrap flex animate-scroll">
        <span className="mr-8 text-lg">
          📅 Date & Time: {dateTime}
        </span>
        <span className="mr-8 text-lg">
          📍 Location: {location}
        </span>
      </div>
    </div>
  );
};

export default BottomTicker;
