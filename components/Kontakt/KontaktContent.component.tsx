import type { NextPage } from "next";
import Head from "next/head";

import styles from "../../styles/Home.module.css";

const KontaktContent: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DFWeb v3</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Velkommen til Kontakt</h1>
      </main>
    </div>
  );
};

export default KontaktContent;
