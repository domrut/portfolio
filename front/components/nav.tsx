export default function Nav({ setSection, section }) {
  const switchSectionHandler = (section: string) => {
    setSection(section);
  };
  return (
    <nav className="max-w-xl mx-auto my-24 sm:my-40">
      <ul className="flex text-white text-xl sm:text-3xl justify-evenly items-center">
        <li
          onClick={(event) =>
            switchSectionHandler((event.target as HTMLElement).innerText)
          }
          className={`font-bold tracking-wide hover:opacity-100 ${
            section === "Experience"
              ? "opacity-100 pointer-events-none cursor-default"
              : "opacity-20 cursor-pointer hover:text-teal-400"
          }`}
        >
          Experience
        </li>
        <li className="mx-1">|</li>
        <li
          onClick={(event) =>
            switchSectionHandler((event.target as HTMLElement).innerText)
          }
          className={`font-bold tracking-wide hover:opacity-100 ${
            section === "Projects"
              ? "opacity-100 pointer-events-none cursor-default"
              : "opacity-20 cursor-pointer hover:text-teal-400"
          }`}
        >
          Projects
        </li>
      </ul>
    </nav>
  );
}
