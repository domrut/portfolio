import Head from "next/head";
import Header from "../components/header";
import Introduction from "../components/introduction";
import Nav from "../components/nav";
import {useState} from "react";
import Experiences from "../components/experiences";

export default function Home() {
    const [section, setSection] = useState<string>("Experience")
    return (
        <>
            <Head>
                <title>Dominykas Rutkauskas</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main>
                <Introduction/>
                <Nav section={section} setSection={setSection}/>
                <Experiences section={section}/>
            </main>
        </>
    )
}