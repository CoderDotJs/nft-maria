import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Metaverse from "../components/Metaverse";
import Trailer from "../components/Trailer";
import Properties from "../components/Properties";
import TeamMembers from "../components/TeamMembers";
import FAQ from "../components/FAQ";
import axios from "axios";

function Home({ team }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maria NFT</title>
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
      {/* <Header /> */}
      <Banner />
      <Marquee text="" />
      <About />
      <Metaverse />
      <Trailer />
      <Properties />
      <TeamMembers team={team} />
      <FAQ />
      <main className={styles.main}></main>
      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  const { data } = await axios.get("https://nft-maria.netlify.app/api/team");

  return {
    props: {
      team: data,
    },
  };
};
export default Home;
