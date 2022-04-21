import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Marquee from "../components/Marquee";

export default function Home() {
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
      <Marquee text="You might be thinking “Cool, but if only some browsers support this, if I set my text color to white and my background is white, the stroke makes it look cool in supporting browsers but entirely disappears in non-supporting browsers!”" />
      <main className={styles.main}></main>

      <Footer />
    </div>
  );
}
