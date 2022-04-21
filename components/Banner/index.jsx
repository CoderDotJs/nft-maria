import React from "react";
import styles from "../../styles/Banner.module.css";
import Header from "../Header";
import Link from "next/link";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Header />
      <div className={`container mx-auto ${styles.banner__main} relative`}>
        <div
          className={`mx-auto h-full w-full flex justify-center items-center flex-col banner__main`}
        >
          <h1
            className={`text-3xl sm:text-5xl leading-normal font-extrabold text-center antialiased my-5`}
          >
            Nisl, erat consectetursse
            <br />
            <span className="text-pink-500 line">Nunc, Facilisis</span>
          </h1>
          <p className="text-center text-slate-700 antialiased my-5 text-base px-3 sm:p-0 sm:text-xl">
            Scelerisque nunc felis quis semper ut mi nunc neque vulputate et{" "}
            <br />
            consectetur aliquet
          </p>
          <div className="2xl:w-1/5 xl:w-3/12 lg:w-4/12 md:w-2/5 sm:w-6/12 w-10/12 flex justify-around sm:justify-between items-center my-5">
            <p className="bg-blue-400 px-10 py-1  font-bold text-white rounded-full bg__gradient">
              <Link href="/" passHref>
                Discord
              </Link>
            </p>

            <div className="flex justify-between items-center">
              <p className="bg-blue-400 px-7 py-1 font-bold text-white rounded-full bg__gradient">
                <Link href="/whitepaper" passHref>
                  Whitepaper
                </Link>
              </p>
            </div>
          </div>

          <div className="mx-auto my-10">
            <i className="fa-solid fa-chevron-down p-5 border-dashed border-2 rounded-full text-pink-400"></i>
          </div>
        </div>
        <div className="hidden sm:block absolute right-0 top-1/4 flex flex-col justify-between items-center  mx-auto my-8">
          <ul className="flex flex-col justify-center items-center">
            <li>
              <Link href="/">
                <i className="fa-brands fa-discord text-xl my-1"></i>
              </Link>
            </li>
            <li>
              <Link href="/">
                <i className="fa-brands fa-instagram-square text-xl my-1"></i>
              </Link>
            </li>
            <li>
              <Link href="/">
                <i className="fa-brands fa-twitter text-xl my-1"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
