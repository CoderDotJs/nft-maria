import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const index = () => {
  return (
    <div className="bg-gradient-to-br from-transparent via-transparent to-purple-200">
      <Head>
        <title>Signup - NFT Maria</title>
        <meta name="description" content="Biggest NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <header>
        <div className="container mx-auto flex justify-between items-center py-10 px-10 sm:px-0">
          <div className="2xl:2/12 lg:w-1/6 w-1/5 font-extrabold text-2xl md:text-center">
            <span className="text__gradient uppercase">
              <Link href="/" passHref>
                {/* nft maria */}
                logo
              </Link>
            </span>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-slate-400 mr-10 lg:block hidden">
              Already Have an account?{" "}
              <span className="font-bold text-black">
                <Link href="/login" passHref>
                  Login
                </Link>
              </span>
            </h3>
            <button className="bg-blue-400 px-7 py-1 font-bold text-white rounded-full bg__gradient">
              Metamask
            </button>
          </div>
        </div>
      </header>

      <div className="flex justify-center items-center ">
        <div className="md:w-2/5  max-h-min hidden md:block">
          <Image
            src="/assets/images/login.png"
            alt="login"
            layout="responsive"
            width={400}
            height={600}
            className="h-full w-full"
          />
        </div>

        <div className="w-full p-10 md:w-3/5 max-h-min md:p-7 lg:p-10">
          <h1 className="text-4xl text-black font-bold">
            Welcome to <span className="text__gradient uppercase">Signup</span>
          </h1>
          <h6 className="text-slate-600 text-base">Register your account</h6>

          <div className="">
            <form className="w-full ">
              <div className="flex flex-wrap -mx-3 md:mb-6 md:my-5 lg:my-10">
                <div className="w-full md:w-4/5  px-3 md:mb-0 my-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Name
                  </label>
                  <input
                    className="appearance-none rounded-2xl block w-full bg-white text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="w-full md:w-4/5  px-3 md:mb-0 my-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2"
                    htmlFor="grid-email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none rounded-2xl block w-full bg-white text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    placeholder="john_doe@doe.com"
                  />
                </div>
                <div className="w-full md:w-4/5  px-3 md:mb-0 my-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none rounded-2xl block w-full bg-white text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="w-full md:w-4/5  px-3 md:mb-0 my-3">
                  <button
                    type="submit"
                    className="uppercase bg__gradient text-white  px-16 py-3 rounded-lg text-xs"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>

          <h3 className="text-slate-600 mr-10 block lg:hidden">
            Already Have an account?{" "}
            <span className="font-bold text-slate-700">
              <Link href="/login" passHref>
                Login
              </Link>
            </span>
          </h3>

          <div className=" w-full sm:w-3/5 md:w-8/12 lg:w-5/12 flex justify-between items-center md:mt-10 lg:mt-20 mt-5">
            <h6 className="text-base text-slate-600">Signup with</h6>
            <div className="flex justify-around items-center w-6/12">
              <span className="border-2 flex justify-around items-center border-slate-200 w-10 rounded-full h-10">
                <Image
                  src="https://img.icons8.com/color/48/000000/facebook-new.png"
                  alt="facebook"
                  width={30}
                  height={30}
                />
              </span>
              <span className="border-2 flex justify-center items-center border-slate-200 w-10 rounded-full h-10">
                <Image
                  src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png"
                  alt="linkedin"
                  width={30}
                  height={30}
                />
              </span>
              <span className="border-2 flex justify-center items-center border-slate-200  w-10 rounded-full h-10">
                <Image
                  src="https://img.icons8.com/color/48/000000/google-logo.png"
                  alt="google"
                  width={30}
                  height={30}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
