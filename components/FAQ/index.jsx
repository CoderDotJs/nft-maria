/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import axios from "axios";
import TopText from "../TopText";
import Accordion from "../Accordion";

const index = () => {
  const [faq, setFaq] = useState([]);
  const [expanded, setExpanded] = useState({});

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(panel);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`https://nft-maria.netlify.app/api/faq`);
      setFaq(data);
      setExpanded(data[0]);
    };
    return () => {
      fetchData();
    };
  }, []);

  return (
    <section
    //   className={`py-32 bg-gradient-to-br from-transparent via-transparent to-rose-200 `}
    >
      <TopText text="FAQ" both={true} align="justify-center" />
      <h1 className=" text-center text-2xl lg:text-4xl font-bold uppercase mb-10">
        <span className="text__gradient">FREQUENTLY ASKED QUESTIONS</span>
      </h1>
      <div className="container mx-auto w-4/5 py-14">
        {faq.map((accordion) => {
          return (
            <Accordion
              accordion={accordion}
              key={accordion.id}
              expanded={expanded}
              handleChange={handleChange}
            />
          );
        })}
      </div>
    </section>
  );
};

export default index;
