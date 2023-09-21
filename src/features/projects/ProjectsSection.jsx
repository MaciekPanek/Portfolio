import Heading from "../../ui/Heading";
import Project from "./Project";

function ProjectsSection() {
  return (
    <section className="h-max px-4 pb-28 " id="projects">
      <Heading>Projects</Heading>
      <h3 className="mt-16 text-dark-200 leading-8 text-xl font-extralight tracking-wide ">
        Check out a few of my main projects I have worked on, or some of my side
        projects on the left-hand side.
      </h3>
      <section className="mt-10 flex flex-col items-center  ">
        <Project
          title={"MovieSaver"}
          tech={"React, ReactQuery, Tailwind, Motion Framer"}
          src={"/MovieSaverSS.png"}
          url={"https://movie-saver-three.vercel.app/"}
        >
          MovieSaver is a website, where you can search and bookmark your
          favourite movies or tv shows you already watched, or add new ones to
          your watchlist.
        </Project>
        <Project
          title={"MovieSaver"}
          tech={"React, ReactQuery, Tailwind, Motion Framer"}
          src={"/MovieSaverSS.png"}
          url={"https://movie-saver-three.vercel.app/"}
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
