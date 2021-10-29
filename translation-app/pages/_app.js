import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Translation App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="This app will help you translate text from English to French/Spanish/Russian/Hindi/Bengali/Arabic/Marathi/Italian/Dutch/Portuguese!"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@prashoonb" />
        <meta name="twitter:creator" content="@prashoonb" />
        <meta property="og:title" content="Translation App" />
        <meta
          property="og:description"
          content="This app will help you translate text from English to French/Spanish/Russian/Hindi/Bengali/Arabic/Marathi/Italian/Dutch/Portuguese!"
        />
        <meta
          property="og:url"
          content="https://rapidapi-example-translation-app.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:image:alt" content="Translation App" />
        <meta property="og:image:width" content="48" />
        <meta property="og:image:height" content="48" />
        <meta property="og:site_name" content="Translation App" />
        <link
          rel="canonical"
          href="https://rapidapi-example-translation-app.vercel.app/"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
