import { BsFillSunFill } from "react-icons/bs";
import NavLink from "./NavLink";

function HeaderSection() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 hidden h-32 w-full items-center justify-between md:flex max-w-[640px] sm:mx-auto md:max-w-[770px] lg:max-w-[1024px] xl:max-w-[1280px] ">
      <a className=" relative left-5 " href="/#">
        <img src="/Logo.png" />
      </a>
      <nav className="flex items-center justify-center gap-x-14 mr-5 text-lg">
        <NavLink href="/#intro">Introduction</NavLink>
        <NavLink href="/#projects">Projects</NavLink>
        <NavLink href="/#about">About</NavLink>
        <NavLink href="/#contact">Contact</NavLink>
        <button className="text-dark-400 ">
          <BsFillSunFill />
        </button>
      </nav>
    </header>
  );
}

export default HeaderSection;
