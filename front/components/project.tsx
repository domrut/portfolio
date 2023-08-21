import TopRightArrowIcon from "./svg/topRightArrow";

export default function Project({project, github, demo, stack, description}) {
    return (
        <li className="flex flex-col w-full card:max-w-2xl mx-auto transition-colors group/item text-slate-400 px-6 py-8 sm:px-12 mb-4 rounded-lg hover:shadow-card hover:bg-cardHover customHover">
            <div className="text-white tracking-wide">
                <p className="text-xl font-semibold transition-colors group-hover/item:text-teal-400 sm:text-2xl mb-10">{project}</p>
                <p className="text-base text-slate-400 my-2">{description}</p>
            </div>
            <div className="flex my-4 text-sm sm:text-base">
                <a href={github} target="_blank" className="text-slate-300 group/anchor mr-10 relative">
                    GitHub
                    <TopRightArrowIcon/>
                </a>
                <a href={demo} target="_blank" className="text-slate-300 group/anchor relative">
                    Demo
                    <TopRightArrowIcon/>
                </a>
            </div>
            <div className="text-sm sm:text-base flex max-w-xl flex-wrap">
                {stack.map((el: string) => {
                    return <p className="leading-normal text-sm font-medium w-max tracking-wide px-3 mb-3 py-1 bg-teal-400/10 text-teal-300 rounded-full whitespace-nowrap mr-1.5">{el}</p>
                })}
            </div>
        </li>
    )
}