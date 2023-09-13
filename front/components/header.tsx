import CoderIcon from "./svg/coderIcon";
export default function Header() {
  return (
    <header className="mt-16 sm:mt-20 flex justify-between items-center">
      <div className="max-w-[280px] sm:max-w-full">
        <h1 className="text-white tracking-tighter font-bold text-4xl sm:text-5xl">
          Dominykas Rutkauskas
        </h1>
        <h2 className="text-white my-5 tracking-tight text-xl sm:text-2xl">
          Looking for Front-End/React opportunities
        </h2>
        <p className="text-neutral-400 text-base mb-10">
          I build applications and create experiences on the web.
        </p>
        <a
          href="https://www.linkedin.com/in/dominykas-rutkauskas-2bb282166/"
          target="_blank"
          className="text-slate-900 inline-block text-[18px] font-semibold bg-teal-400 px-6 py-3 sm:px-10 sm:py-5 rounded-lg hover:shadow-button transition-shadow"
        >
          Contact me
        </a>
      </div>
      <div className="min-w-[300px] hidden sm:block">
        <CoderIcon />
      </div>
    </header>
  );
}
