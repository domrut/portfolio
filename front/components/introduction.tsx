import ReactIcon from "./svg/reactIcon";
import HTMLIcon from "./svg/htmlIcon";
import CSSIcon from "./svg/cssIcon";
import NodeIcon from "./svg/nodeIcon";
import NextIcon from "./svg/nextIcon";
import JsIcon from "./svg/jsIcon";
import ReduxToolkit from "./svg/reduxToolkitIcon";
import Git from "./svg/gitIcon";

export default function Introduction () {
    return (
        <section className="my-10 text-slate-400 text-base sm:text-[18px] tracking-wide max-w-4xl">
            <section>
                <p>
                    <span className="text-white font-semibold">Hello</span>, meet me, an intermediate Front-End developer with a passion for crafting captivating digital experiences. With a solid foundation in web development, I have honed the skills through <span className="text-white font-semibold">hands-on experience</span> building web applications. My journey is marked by <a href="https://github.com/domrut" className="text-white font-semibold hover:text-teal-400">personal projects</a>, where I've taken the initiative continuously to expand my skill set through self-directed learning.</p>
                <p className="my-5">
                    I bring a <span className="text-white font-semibold">unique edge</span> – a strong background in tech support for well known companies like <a href="https://tesonet.com" target="_blank" className="text-white font-semibold hover:text-teal-400">Tesonet</a>, <a href="https://omnisend.com" target="_blank" className="text-white font-semibold hover:text-teal-400">Omnisend</a>, and <a href="https://kilo.health" target="_blank" className="text-white font-semibold hover:text-teal-400">Kilo.Health</a>. This exposure has not only deepened my technical understanding but also refined the ability to empathize with user needs, provide solutions with finesse and perform under stressful situations where quality is key.</p>
                <p>
                    What truly sets me apart is my drive by an unwavering <span className="text-white font-semibold">motivation to succeed</span> and learn. I'm determined to stay on the cutting edge of technology and take every challenge as an opportunity to grow, <span className="tooltip"><span className="text-white font-semibold">commit</span><span className="tooltipIcon"><Git/></span></span> and harness the energy to evolve into an even more adept and capable Front-End developer.
                </p>
            </section>
            <section className="mt-10 flex flex-col sm:flex-row items-start sm:items-center">
                <p className="text-white font-bold text-base sm:text-xl">Tech stack:</p>
                <section className="mt-5 [&>*]:mr-5 sm:[&>*]:mr-0 sm:[&>*]:ml-5 sm:mt-0">
                    <ReactIcon/>
                    <ReduxToolkit/>
                    <HTMLIcon/>
                    <CSSIcon/>
                    <NodeIcon/>
                    <NextIcon/>
                    <JsIcon/>
                </section>
            </section>
        </section>
    )
}