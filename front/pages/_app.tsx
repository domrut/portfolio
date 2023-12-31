import "../styles/globals.css";
import { AppProps } from "next/app";
import Layout from "../components/layout";
import { Analytics } from "@vercel/analytics/react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  );
}
