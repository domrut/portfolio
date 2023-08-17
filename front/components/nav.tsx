export default function Nav () {
    return (
        <nav className="max-w-xl mx-auto mt-60 mb-52">
            <ul className="flex text-white text-3xl justify-evenly items-center">
                <li className="font-bold tracking-wide hover:text-teal-400 cursor-pointer">Experience</li>
                <li>|</li>
                <li className="font-bold tracking-wide hover:text-teal-400 cursor-pointer">Projects</li>
            </ul>
        </nav>
    )
}