import Navbar from "@/Components/Navbar/Navbar";
import Head from "next/head";
import IndexPageStyle from "@/styles/index.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Actual01</title>
        <meta
          name="description"
          content="Actual01 serves as a portal for the next generation of builders and change-makers to discover opportunities, work together, and contribute to Bounties and DAOs by building your POW profile you need for Web3.0."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
      </main>
    </>
  );
}
