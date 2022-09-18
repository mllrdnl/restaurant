import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";

import styles from "../styles/Home.module.css";

export default function Home() {
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
    </div>
  );
}
