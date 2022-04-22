import React, { useEffect } from "react";

const index = ({ left, right, both = true, text }) => {
  return (
    <div className="flex justify-center items-center my-5 top__text leading-10 font-light text-sm uppercase text-slate-600 ">
      {both && (
        <>
          <span className="block h-px w-14 bg-slate-600 mx-3"></span>
          {text}
          <span className="block h-px w-14 bg-slate-600 mx-3"></span>
        </>
      )}
      {left && (
        <>
          <span className="block h-px w-14 bg-slate-600 mx-3"></span>
          {text}
          {/* <span className="block h-px w-14 bg-slate-600 mx-3"></span> */}
        </>
      )}
      {right && (
        <>
          {/* <span className="block h-px w-14 bg-slate-600 mx-3"></span> */}
          {text}
          <span className="block h-px w-14 bg-slate-600 mx-3"></span>
        </>
      )}
    </div>
  );
};

export default index;
