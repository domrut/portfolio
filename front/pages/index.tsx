import Head from "next/head";
import {MongoClient} from "mongodb";
import Header from "../components/header";
import Introduction from "../components/introduction";
import Nav from "../components/nav";
import {Key, useState} from "react";
import Experience from "../components/experience";
import {GetStaticProps} from "next";

export default function Home({experiences}) {
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
                {experiences.map((el: { _id: Key; company: string; job: string; end_date: string; start_end: string; responsibilities: string[]; }) => {
                    return (
                        <Experience
                            key={el._id}
                            company={el.company}
                            job={el.job}
                            endDate={el.end_date}
                            startDate={el.start_end}
                            responsibilities={el.responsibilities}
                        />
                    )
                })}
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const client = await MongoClient.connect(process.env.DBKEY);
    const myData1 = await client.db().collection("experience").find().toArray();
    await client.close();
    return {
        props: {
            experiences: JSON.parse(JSON.stringify(myData1))
        }
    }
}