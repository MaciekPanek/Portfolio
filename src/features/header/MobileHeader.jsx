import { useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import NavLink from "./NavLink";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const variantsButton = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const variants = {
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.6,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
    scale: 0.5,
  },
};

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function closeMenu() {
    setIsMenuOpen(false);
  }

  const ref = useOutsideClick(closeMenu);

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
          ref={ref}
          className="md:hidden flex flex-col items-center z-30 h-[70%]  bg-dark-700 fixed inset-x-0 top-0 p-4 pt-20 "
        >
          <NavLink
            href="/#intro"
            tailStyle={"text-3xl mb-5 "}
            onClick={toggleMenu}
          >
            Introduction
          </NavLink>
          <NavLink
            href="/#projects"
            tailStyle={"text-3xl mb-5 "}
            onClick={toggleMenu}
          >
            Projects
          </NavLink>
          <NavLink
            href="/#about"
            tailStyle={"text-3xl mb-5 "}
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            href="/#contact"
            tailStyle={"text-3xl mb-5 "}
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
          <motion.button
            variants={variantsButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-dark-400 text-3xl "
          >
            <BsFillSunFill />
          </motion.button>
        </motion.nav>
      )}
    </>
  );
}

export default MobileHeader;
