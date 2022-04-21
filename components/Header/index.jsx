import React from "react";
import Link from "next/link";

const index = () => {
  const handleMenu = () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("hidden");
  };

  return (
    <header>
      <div className="container mx-auto flex sm:flex md:block lg:flex justify-between items-center p-7">
        <div className="2xl:2/12 lg:w-1/6 md:w-full sm:w-3/5 w-3/5 font-extrabold text-2xl md:text-center">
          <Link href="/" passHref>
            <span className="text__gradient uppercase">nft maria</span>
          </Link>
        </div>
        <nav className="hidden 2xl:w-4/12 xl:w-4/12 lg:w-2/5 md:w-3/5 w-2/5 md:mx-auto md:my-5 sm:hidden md:block">
          <ul className="flex lg:justify-between md:justify-around items-center text-slate-500	">
            <li className="text-blue-400 font-bold">
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                About
              </Link>
            </li>
            <li>
              <Link href="/roadmap" passHref>
                Roadmap
              </Link>
            </li>
            <li>
              <Link href="/faq" passHref>
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/our-team" passHref>
                Our Team
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden 2xl:w-2/12 xl:w-1/5 lg:w-3/12 md:w-2/5 w-1/5 lg:m-0 md:mx-auto sm:hidden md:block">
          <ul className="flex justify-between items-center">
            <li className="text-slate-500">Login/Signup</li>
            <li className="bg-blue-400 px-7 py-1 font-bold text-white rounded-full bg__gradient">
              Metamask
            </li>
          </ul>
        </div>

        {/* mobile menu  */}

        <div
          className="sm:block md:hidden cursor-pointer "
          onClick={handleMenu}
        >
          <i className="fa-solid fa-bars-staggered fa-2x"></i>
          <nav className="absolute hidden w-screen h-screen bg-slate-800 top-0 left-0 navbar  z-10 ">
            <div className="relative">
              <i
                className="fa-solid fa-xmark fa-2x text-white block float-right m-10 absolute right-0 top-0"
                onClick={handleMenu}
              ></i>
              <ul className=" absolute h-screen w-screen text-slate-500 flex justify-center items-center flex-col">
                <li className="text-blue-400 font-bold my-2">
                  <Link href="/" passHref>
                    Home
                  </Link>
                </li>
                <li className="my-2">
                  <Link href="/about" passHref>
                    About
                  </Link>
                </li>
                <li className="my-2">
                  <Link href="/roadmap" passHref>
                    Roadmap
                  </Link>
                </li>
                <li className="my-2">
                  <Link href="/faq" passHref>
                    FAQ
                  </Link>
                </li>
                <li className="my-2">
                  <Link href="/our-team" passHref>
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default index;
