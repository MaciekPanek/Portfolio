import { motion } from "framer-motion";

const variants = {
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

function NavLink({ children, tailStyle, href, isActive, onClick }) {
  return (
    <motion.a
      className={` nav-link lg:text-xl ${tailStyle} ${
        isActive ? "active-nav-link" : ""
      } `}
      href={href}
      onClick={onClick}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

export default NavLink;
