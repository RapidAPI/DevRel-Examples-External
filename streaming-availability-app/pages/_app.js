import Head from "next/head";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>RapidAPI - Streaming Availability App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
