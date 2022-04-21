import React from "react";
import styles from "../../styles/Banner.module.css";

const index = ({ text }) => {
  return (
    <marquee
      behavior="scroll"
      scrollAmount="10"
      width="100%"
      direction="left"
      height="50px"
      className={`${styles.gradient__marquee} flex justify-center items-center uppercase text-3xl text-extrabold`}
    >
      <span>
        {text
          ? text
          : "You might be thinking “Cool, but if only some browsers support this, if I set my text color to white and my background is white, the stroke makes it look cool in supporting browsers but entirely disappears in non-supporting browsers!”"}
      </span>
    </marquee>
  );
};

export default index;
