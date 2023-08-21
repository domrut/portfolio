import ExternalIcon from "./svg/external";

export default function Experience({company, endDate, job, responsibilities, startDate, companyUrl}) {
    const redirectHandler = ():void => {
        window.open(companyUrl, "_blank");
    }

    return (
        <li onClick={redirectHandler} className="flex flex-col max-w-2xl mx-auto cursor-pointer transition-colors group/item text-slate-400 px-6 py-8 sm:px-12 mb-4 rounded-lg hover:shadow-card hover:bg-cardHover customHover">
            <div className="text-white font-semibold tracking-wide">
                <div className="flex">
                    <p className="text-xl relative transition-colors group-hover/item:text-teal-400 sm:text-2xl mr-2">
                        {company}
                        <ExternalIcon/>
                    </p>
                </div>
                <p className="text-base transition-colors group-hover/item:text-teal-400 sm:text-xl my-2">{job}</p>
            </div>
            <div className="flex my-4 text-sm sm:text-base">
                <p className="text-slate-300">{startDate}</p>
                <p className="mx-1.5">-</p>
                <p className="text-slate-300">{endDate}</p>
            </div>
            <div className="text-sm sm:text-base">
                {responsibilities.map((el: string) => {
                    return <p className="leading-normal my-1.5">{el}</p>
                })}
            </div>
        </li>
    )
}