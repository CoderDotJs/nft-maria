import React from "react";
import Image from "next/image";
import Link from "next/link";
import TopText from "../TopText";

const index = () => {
  return (
    <div className="container mx-auto my-14">
      <TopText text="about" />
      <h1 className="uppercase text-center text-2xl sm:text-4xl font-extrabold leading-normal">
        Bring the Metaverse to <br />{" "}
        <span className="text__gradient">life with NFTs</span>
      </h1>
      <p className="text-center text-slate-500 my-5 text-xs sm:text-md font-normal leading-relaxed">
        {`6,000 NFTs that give you creative control over Property's world.`}
        <br /> Own assets that make your world more colorful and fun.
      </p>
      <div className="mx-5 sm:mx-0 flex justify-center items-center">
        <div>
          <Image
            src="/assets/images/left_nft.png"
            alt="left Nft"
            width={300}
            height={300}
            // layout="responsive"
            className="w-full h-full"
          ></Image>
        </div>
        <div>
          <Image
            src="/assets/images/middle_nft.png"
            alt="left Nft"
            width={380}
            height={380}
            // layout="responsive"
            className="w-full h-full"
          ></Image>
        </div>
        <div>
          <Image
            src="/assets/images/right_nft.png"
            alt="left Nft"
            width={300}
            height={300}
            // layout="responsive"
            className="w-full h-full"
          ></Image>
        </div>
      </div>
      <div className="my-5">
        <p className="text-slate-500 text-center text-sm">
          Join the Lorem Ipsum Nft
        </p>
        <button className="block mx-auto uppercase bg__gradient px-12 text-xs font-bold my-5 py-3 rounded-xl text-white">
          <Link href="/"> Join Discord</Link>
        </button>
      </div>
    </div>
  );
};

export default index;
