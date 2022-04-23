import React from "react";
import Image from "next/image";
import TopText from "../TopText";
import styles from "../../styles/Metaverse.module.css";

const index = () => {
  return (
    <section
      className={`${styles.metaverse__tilt} bg-gradient-to-tr from-slate-100 via-transparent to-indigo-200 py-24 my-10`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center ">
        <div className="flex flex-col justify-center items-center w-full md:w-6/12">
          <div className="mx-auto">
            <Image
              src="/assets/images/dg_main.png"
              alt="main"
              height={560}
              width={700}
              className="w-full h-full"
            ></Image>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/assets/images/dg_1.png"
              alt="main"
              height={120}
              width={205}
              className="w-full h-full"
            ></Image>
            <Image
              src="/assets/images/dg_2.png"
              alt="main"
              height={120}
              width={205}
              className="w-full h-full"
            ></Image>
            <Image
              src="/assets/images/dg_3.png"
              alt="main"
              height={120}
              width={205}
              className="w-full h-full"
            ></Image>
          </div>
        </div>
        <div className="w-full md:w-6/12 p-5">
          <TopText right={true} text={`Metaverse`} align="justify-start my-0" />
          <h1 className="text__gradient text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold uppercase mb-5">
            Curated Digital Experiences
          </h1>
          <div className="flex justify-center items-center flex-col mt-7">
            <div className={`${styles.border__gradient} w-full h-full my-3`}>
              <dl className="m-3">
                <dt
                  className={`${styles.gradient__circle} uppercase lg:text-2xl font-bold `}
                >
                  Social & Adventures
                </dt>
                <dd className="uppercase text-slate-600 text-xs lg:text-sm">
                  Meet others and enjoy the metaverse together
                </dd>
              </dl>
            </div>
            <div className={` w-full h-full my-3`}>
              <dl className="m-3">
                <dt
                  className={`${styles.gradient__circle} uppercase lg:text-2xl font-bold `}
                >
                  Social & Adventures
                </dt>
                <dd className="uppercase text-slate-600 text-xs lg:text-sm">
                  Meet others and enjoy the metaverse together
                </dd>
              </dl>
            </div>
            <div className={` w-full h-full my-3`}>
              <dl className="m-3">
                <dt
                  className={`${styles.gradient__circle} uppercase lg:text-2xl font-bold `}
                >
                  Social & Adventures
                </dt>
                <dd className="uppercase text-slate-600 text-xs lg:text-sm">
                  Meet others and enjoy the metaverse together
                </dd>
              </dl>
            </div>
            <div className={` w-full h-full my-3`}>
              <dl className="m-3">
                <dt
                  className={`${styles.gradient__circle} uppercase lg:text-2xl font-bold `}
                >
                  Social & Adventures
                </dt>
                <dd className="uppercase text-slate-600 text-xs lg:text-sm">
                  Meet others and enjoy the metaverse together
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
