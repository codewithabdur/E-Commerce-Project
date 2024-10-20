import React from "react";
import { Toaster } from "react-hot-toast";
import { Layout } from "../components";
import "../styles/globals.css";
import { StateContext } from "../context/StateContext";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StateContext>
        <Layout>
          <Toaster />
          <Head>
            <link rel="icon" type="image/png" href="/assets/favicon.png" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </>
  );
}

export default MyApp;
