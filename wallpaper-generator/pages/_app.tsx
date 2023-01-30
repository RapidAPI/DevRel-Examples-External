import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Public_Sans } from "@next/font/google";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${publicSans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
