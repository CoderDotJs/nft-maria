import React from "react";
import Image from "next/image";

const index = ({ image, title, price, bedroom, createdAt }) => {
  return (
    <div className="">
      <div className="relative overflow-hidden">
        <Image
          src={image}
          width={300}
          height={300}
          alt={title}
          layout="responsive"
          className="w-full h-full"
        ></Image>
        <div className="text-white flex justify-between flex-wrap items-center font-normal absolute bg-gray-900 bottom-0 w-full h-auto p-3">
          <h6 className="text-left">{bedroom} Bedrooms</h6>
          <p>{createdAt}</p>
        </div>
      </div>
      <h3 className="uppercase text-xl font-bold mt-1">{title}</h3>
    </div>
  );
};

export default index;
