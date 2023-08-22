import {PropsWithChildren} from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout({children}: PropsWithChildren) {
    return (
        <div className="max-w-container mx-auto px-[5%]">
            <Head>
                <title>Dominykas Rutkauskas</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}