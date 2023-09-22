import { BsFillSunFill } from "react-icons/bs";
import NavLink from "./NavLink";
import { useEffect, useState } from "react";

function HeaderSection() {
  const [activeLink, setActiveLink] = useState("intro"); // Initialize with the first section ID

  useEffect(() => {
    const sectionIds = ["intro", "projects", "about", "contact"];
    const handleScroll = () => {
      // const scrollY = window.scrollY;

      // Find the section currently in the viewport
      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 500 && rect.bottom >= 500) {
            setActiveLink(sectionId);
            break;
          }
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 hidden h-32 w-full items-center justify-between md:flex max-w-[640px] sm:mx-auto md:max-w-[770px] lg:max-w-[1024px] xl:max-w-[1280px] ">
      <a className=" relative left-5 " href="/#">
        <img src="/Logo.png" alt="Logo" />
      </a>
      <nav className="flex items-center justify-center gap-x-14 mr-5 text-lg">
        <NavLink href="/#intro" isActive={activeLink === "intro"}>
          Introduction
        </NavLink>
        <NavLink href="/#projects" isActive={activeLink === "projects"}>
          Projects
        </NavLink>
        <NavLink href="/#about" isActive={activeLink === "about"}>
          About
        </NavLink>
        <NavLink href="/#contact" isActive={activeLink === "contact"}>
          Contact
        </NavLink>
        <button className="text-dark-400 ">
          <BsFillSunFill />
        </button>
      </nav>
    </header>
  );
}

export default HeaderSection;
