import {PropsWithChildren} from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    weight: ['400', '700', '500'],
    subsets: ["latin"]
})
export default function Layout({children}: PropsWithChildren) {
    return (
        <div className={`max-w-container mx-auto px-[5%] ${montserrat.className}`}>
            <Head>
                <title>Dominykas Rutkauskas</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="description" content="Portfolio page for Dominykas Rutkauskas" />
                <meta key="robots" name="robots" content="all" />
                <meta key="googlebot" name="googlebot" content="all" />
            </Head>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}
