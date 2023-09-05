import {MongoClient} from "mongodb";
import Introduction from "../components/introduction";
import Nav from "../components/nav";
import {Key, useEffect, useState} from "react";
import Experience from "../components/experience";
import {GetStaticProps} from "next";
import Project from "../components/project";
import TopRightArrowIcon from "../components/svg/topRightArrow";

export default function Home({experiences, projects}) {
    const [section, setSection] = useState<string>("Experience");
    const [showButton, setShowButton] = useState<boolean>(false)
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
                    responsibilities: string[];
                }) => {
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
                stack: string[];
            }, index:number) => {
                return (
                    <Project
                        key={el._id}
                        project={el.project}
                        github={el.github_url}
                        demo={el.demo_url}
                        stack={el.stack}
                        imageIndex={index + 1}
                        description={el.description}
                    />
                )
            }))
        }
    }

    const scrollTop = ():void => {
        window.scrollTo(0, 0)
    }

    const handleScroll = ():void => {
        document.documentElement.scrollTop <= 1500 ? setShowButton(false) : setShowButton(true)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return ():void => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <>
            <Introduction/>
            <Nav section={section} setSection={setSection}/>
            <section className="group/side">
                <ul className="flex flex-wrap max-w-2xl mx-auto card:max-w-full card:m-auto [&>*]:group-hover/side:hover:opacity-50">
                    {navHandler()}
                    {section === "Experience" ? <li className="text-white font-semibold customHover hover:text-teal-400 text-xl mx-6 sm:mx-12"><a href="/pdfs/Resume.pdf" target="_blank">View full resume</a></li> : null}
                </ul>
            </section>
            {showButton ? <button className="fixed text-teal-400 z-10 p-5 rounded-full bg-teal-400/20 bottom-8 right-5 hover:bg-teal-400/70 transition-colors" onClick={scrollTop}><TopRightArrowIcon scrollToTop/></button> : null}
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