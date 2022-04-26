/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Team from "../Team";
import styles from "../../styles/Metaverse.module.css";
import Loading from "../Loading";

const index = ({ team }) => {
  // const [team, setTeam] = useState([]);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const fetching = async () => {
  //     setLoading(true);
  //     const { data } = await axios.get(
  //       `https://nft-maria.netlify.app/api/team`
  //     );
  //     setTeam(data);
  //     setLoading(false);
  //   };

  //   return () => {
  //     fetching();
  //   };
  // }, []);
  return (
    <section
      className={`${styles.metaverse__tilt} py-32 bg-gradient-to-tl from-slate-100 via-transparent to-rose-200 `}
    >
      <h1 className=" text-center text-2xl lg:text-4xl font-bold uppercase mb-10">
        <span className="text__gradient">Our Team</span>
      </h1>
      <div className="container mx-auto sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 flex justify-center items-center flex-col">
        {team.map((member) => {
          return <Team key={member.id} member={member} />;
        })}
      </div>
      {/* {loading && (
        <div className="flex w-screen h-screen justify-center items-center">
          <Loading />
        </div>
      )} */}
    </section>
  );
};
export default index;
