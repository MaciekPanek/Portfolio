import Heading from "../../ui/Heading";
import Project from "./Project";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
      delay: 0.2,
    },
  },
};

function ProjectsSection() {
  return (
    <section className="h-max px-4 pb-28 " id="projects">
      <Heading>Projects</Heading>
      <motion.h3
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="mt-16 text-dark-200 leading-[3rem] text-center text-[50px] font-extralight italic tracking-wide "
      >
        Check out a few of my projects.
      </motion.h3>
      <section className="mt-10 flex flex-col items-center  ">
        <Project
          title={"MovieSaver"}
          tech={"React, ReactQuery, Tailwind, Motion Framer"}
          src={"/MovieSaverSS.png"}
          url={"https://movie-saver-three.vercel.app/"}
          href={"https://github.com/MaciekPanek/MovieSaver"}
        >
          MovieSaver is a website, where you can search and bookmark your
          favourite movies or tv shows you already watched, or add new ones to
          your watchlist.
        </Project>
      </section>
    </section>
  );
}

export default ProjectsSection;
