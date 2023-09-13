import GithubIcon from "./svg/githubIcon";
import Linkedin from "./svg/linkedinIcon";

export default function Footer() {
  return (
    <footer className="max-w-2xl card:mx-0 mx-auto">
      <section className="flex my-10 mx-6 sm:mx-12">
        <GithubIcon />
        <Linkedin />
      </section>
    </footer>
  );
}
