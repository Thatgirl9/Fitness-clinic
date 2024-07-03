import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Icon from "../public/icons8-fitness-bubbles-96.png";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Fitness Clinic</title>
        <meta
          name="description"
          content="Fitness Clinic is a platform for fitness enthusiasts to find the best exercises for their needs."
        />
        <link rel="icon" href={Icon.src} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
