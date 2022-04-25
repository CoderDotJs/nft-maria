/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import TopText from "../TopText";
import Accordion from "../Accordion";

const index = () => {
  return (
    <section
    //   className={`py-32 bg-gradient-to-br from-transparent via-transparent to-rose-200 `}
    >
      <TopText text="FAQ" both={true} align="justify-center" />
      <h1 className=" text-center text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold uppercase mb-10">
        <span className="text__gradient">FREQUENTLY ASKED QUESTIONS</span>
      </h1>
      <div className="container mx-auto w-4/5">
        <Accordion
          accordion={{
            title: "What is Metaversed?",
            desc: "asdkjf;adsf;lkajsdflkjasdf",
          }}
        />
        <Accordion
          accordion={{
            title: "What is Metaverses?",
            desc: "asdkjf;adsf;lkajsdflkjasdf",
          }}
        />
        <Accordion
          accordion={{
            title: "What is Metaverse?",
            desc: "asdkjf;adsf;lkajsdflkjasdf",
          }}
        />
      </div>
    </section>
  );
};

export default index;
