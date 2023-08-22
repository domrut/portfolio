import TopRightArrowIcon from "./svg/topRightArrow";
import {Key} from "react";
import Image from "next/image";

export default function Project({project, github, demo, stack, imageIndex, description}) {
    return (
        <li className="flex flex-col w-full card:max-w-2xl mx-auto transition-colors group/item text-slate-400 px-6 py-8 sm:px-12 mb-4 rounded-lg hover:shadow-card hover:bg-cardHover customHover">
            <section className="flex flex-col sm:flex-row items-start justify-between mb-5">
                <h3 className="text-xl tracking-wide mb-10 sm:mb-0 text-white font-semibold transition-colors group-hover/item:text-teal-400 sm:text-3xl">{project}</h3>
                <section className="flex flex-col items-center">
                    <Image className="rounded border-2 border-slate-200/20 group-hover/item:border-slate-500" src={`/images/${imageIndex}.webp`} alt={`${project} image`} width={170} height={150}/>
                    <section className="flex my-4 text-sm sm:text-base mr-[20px]">
                        <a href={github} target="_blank" className="text-slate-300 hover:text-teal-400 group/anchor relative">
                            GitHub
                            <TopRightArrowIcon scrollToTop={false}/>
                        </a>
                        <a href={demo} target="_blank" className="text-slate-300 hover:text-teal-400 group/anchor ml-10 relative">
                            Demo
                            <TopRightArrowIcon scrollToTop={false}/>
                        </a>
                    </section>
                </section>
            </section>
            <p className="text-base tracking-wide text-slate-400 my-2">{description}</p>
            <section className="text-sm sm:text-base flex max-w-xl mt-5 flex-wrap">
                {stack.map((el: string, index: Key) => {
                    return <p key={index} className="leading-normal text-sm font-medium w-max tracking-wide px-3 mb-3 py-1 bg-teal-400/10 text-teal-300 rounded-full whitespace-nowrap mr-1.5">{el}</p>
                })}
            </section>
        </li>
    )
}