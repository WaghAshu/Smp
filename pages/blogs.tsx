import React from "react";
import Head from "next/head";
import BlogsPageStyle from "@/styles/blogs.module.scss";
import Navbar from "@/Components/Navbar/Navbar";

const blogs = () => {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta
          name="description"
          content="Actual01 serves as a portal for the next generation of builders and change-makers to discover opportunities, work together, and contribute to Bounties and DAOs by building your POW profile you need for Web3.0."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"container "}>
        <Navbar />

        <h1>Blogs</h1>
      </main>
    </>
  );
};

export default blogs;
