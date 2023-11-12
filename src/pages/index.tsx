import styles from "@/styles/Home.module.css";
import { Inter } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Byalsoft</title>
        <meta name="description" content="Byalsoft is up coming" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Image
          src="/Site logo.png"
          alt="Logo"
          width={500}
          height={500}
          className="logo-bg"
        />
        <span>Under</span>
        <span>Construction</span>
      </main>
    </>
  );
}

