import React from "react";
import Image from "next/image";

const index = ({ member }) => {
  return (
    <div className="w-52 sm:w-56 lg:w-64 mx-auto mb-6 md:mb-14">
      <div className="w-full h-full">
        <Image
          src={member.image}
          height={340}
          width={340}
          alt={member.name}
          layout="responsive"
          className="w-full h-full"
        ></Image>
      </div>
      <div className="my-2">
        <h3 className="text-2xl uppercase text-center font-bold">
          {member.name}
        </h3>
        <p className="text-center text-xs text-slate-400 uppercase">
          {member.designation}
        </p>
        <p className="text-center">
          <i className="fa-brands fa-discord text-base my-1 mx-2 text-slate-300"></i>
          <i className="fa-brands fa-instagram-square text-base my-1 mx-2 text-slate-300"></i>
          <i className="fa-brands fa-twitter text-base my-1 mx-2 text-slate-300"></i>
        </p>
      </div>
    </div>
  );
};

export default index;
