import { useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import NavLink from "./NavLink";

const variants = {
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.6,
    },
  },
  closed: {
    opacity: 0,
    scale: 0.5,
  },
};

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the active link when clicked
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <>
      <a className="fixed top-8 left-4 z-40 md:hidden" href="/#">
        <img src="/Logo.png" />
      </a>
      <button
        className="fixed top-8 right-4 z-40 text-3xl  text-dark-200 mix-blend-difference hover:opacity-60 md:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <MdClose /> : <FiMenu />}
      </button>

      {isMenuOpen && (
        <motion.nav
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={variants}
          className="md:hidden flex flex-col items-center z-30 h-[70%]  bg-dark-700 fixed inset-x-0 top-0 p-4 pt-20 "
        >
          <NavLink
            tailStyle={`mb-7 text-3xl ${
              activeLink === "intro" ? "active-nav-link" : ""
            }  `}
            href={"/#intro"}
            onClick={() => handleLinkClick("intro")}
          >
            Introduction
          </NavLink>
          <NavLink
            tailStyle={`mb-7 text-3xl ${
              activeLink === "projects" ? "active-nav-link" : ""
            }  `}
            href={"/#projects"}
            onClick={() => handleLinkClick("projects")}
          >
            Projects
          </NavLink>
          <NavLink
            tailStyle={`mb-7 text-3xl ${
              activeLink === "about" ? "active-nav-link" : ""
            }  `}
            href={"/#about"}
            onClick={() => handleLinkClick("about")}
          >
            About
          </NavLink>
          <NavLink
            tailStyle={`mb-7 text-3xl ${
              activeLink === "contact" ? "active-nav-link" : ""
            }  `}
            href={"/#contact"}
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </NavLink>
          <button className="text-dark-400 ">
            <BsFillSunFill />
          </button>
        </motion.nav>
      )}
    </>
  );
}

export default MobileHeader;
