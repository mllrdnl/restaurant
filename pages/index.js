import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";

import styles from "../styles/Home.module.css";

export default function Home({ coffeeProdList }) {
  console.log(coffeeProdList);
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Shop</title>
        <meta
          name="description"
          content="Coffee shop located in Portland, OR"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <ProductList coffeeProdList={coffeeProdList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/product");
  return {
    props: {
      coffeeProdList: res.data,
    },
  };
};
