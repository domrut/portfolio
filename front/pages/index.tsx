import Head from "next/head";
import {MongoClient} from "mongodb";
import Header from "../components/header";
import Introduction from "../components/introduction";
import Nav from "../components/nav";
import {Key, useState} from "react";
import Experience from "../components/experience";
import {GetStaticProps} from "next";
import Project from "../components/project";

export default function Home({experiences, projects}) {
    const [section, setSection] = useState<string>("Experience");

    const navHandler = () => {
        if (section === "Experience") {
            return (
                experiences.map((el: {
                    _id: Key;
                    company: string;
                    job: string;
                    end_date: string;
                    start_date: string;
                    company_url: string,
                    responsibilities: string[]; }) => {
                    return (
                        <Experience
                            key={el._id}
                            company={el.company}
                            companyUrl={el.company_url}
                            job={el.job}
                            endDate={el.end_date}
                            startDate={el.start_date}
                            responsibilities={el.responsibilities}
                        />
                    )
                })
            )
        } else {
            return (projects.map((el: {
                _id: Key;
                project: string;
                github_url: string;
                demo_url: string;
                description: string;
                stack: string[]; }) => {
                return (
                    <Project
                        key={el._id}
                        project={el.project}
                        github={el.github_url}
                        demo={el.demo_url}
                        stack={el.stack}
                        description={el.description}
                    />
                )
            }))
        }
    }

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
                <section className="group/side">
                    <ul className="flex flex-wrap max-w-2xl mx-auto card:max-w-full card:m-auto [&>*]:group-hover/side:hover:opacity-50">
                    {navHandler()}
                    </ul>
                </section>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const client = await MongoClient.connect(process.env.DBKEY);
    const dataExp = await client.db().collection("experience").find().toArray();
    const dataProj = await client.db().collection("projects").find().toArray();
    await client.close();
    return {
        props: {
            experiences: JSON.parse(JSON.stringify(dataExp)),
            projects: JSON.parse(JSON.stringify(dataProj))
        }
    }
}