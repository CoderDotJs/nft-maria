import React from "react";
import styles from "../../styles/HeaderFooter.module.css";

const index = () => {
  return (
    <footer
      className={`${styles.footer} bg-gradient-to-r from-slate-100 to-rose-100`}
    >
      <div className="container mx-auto pt-28 pb-14">
        <div className="bg__gradient rounded-full h-28 w-28 flex justify-center items-center mx-auto">
          <h1 className="text-2xl uppercase text-white font-bold text-center">
            NFT MARIA
          </h1>
        </div>
        <div className="flex justify-between items-center md:w-1/5 sm:w-2/5 w-6/12 mx-auto my-8">
          <i className="fa-brands fa-discord fa-2x text-2xl sm:text-4xl"></i>
          <i className="fa-brands fa-instagram-square fa-2x text-2xl sm:text-4xl"></i>
          <i className="fa-brands fa-twitter fa-2x text-2xl sm:text-4xl"></i>
        </div>
        <nav className="md:w-2/5 sm:w-3/5 w-6/12 mx-auto my-8 d-block">
          <ul className="sm:flex sm:justify-between sm:items-center flex flex-col justify-center items-center text-slate-500	">
            <li>Home</li>
            <li>About</li>
            <li>Roadmap</li>
            <li>FAQ</li>
            <li>Our Team</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default index;
