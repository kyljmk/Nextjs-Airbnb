import Image from "next/image";
import React from "react";

function SmallCard({ image, location, distance }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image src={image} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <p>{location}</p>
        <p>{distance}</p>
      </div>
    </div>
  );
}

export default SmallCard;
