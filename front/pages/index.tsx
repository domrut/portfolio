import Head from "next/head";
import Header from "../components/header";
import Introduction from "../components/introduction";
import Nav from "../components/nav";

export default function Home() {
    return (
        <>
            <Head>
                <title>Dominykas Rutkauskas</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main>
                <Introduction/>
                <Nav/>
            </main>
        </>
    )
}