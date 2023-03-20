// Modules

// Next Components
import Head from "next/head";

// Styles
import IndexPageStyle from "@/styles/index.module.scss";

// Components
import Navbar from "@/Components/Navbar/Navbar";
import HeroSection from "@/Components/Pages/Index/HeroSection/HeroSection";
import FeatureSection from "@/Components/Pages/Index/FeatureSection/FeatureSection";
import UpdatesStrip from "@/Components/Pages/Index/UpdatesStrip/UpdatesStrip";
import LatestBlogs from "@/Components/Pages/Index/LatestBlogs/LatestBlogs";
import RecentReviews from "@/Components/Pages/Index/RecentReviews/RecentReviews";
import Footer from "@/Components/Footer/Footer";

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
      <Navbar />
      <main className="container">
        <HeroSection />
        <FeatureSection />
        <UpdatesStrip />
        <LatestBlogs />
      </main>
      <RecentReviews />
      <Footer />
    </>
  );
}
