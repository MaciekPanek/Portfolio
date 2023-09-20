import Project from "./Project";

function ProjectsSection() {
  return (
    <section className="h-max px-4 pb-28 " id="projects">
      <header className="flex items-center ">
        <div className="h-[1px] flex-1 bg-dark-100  dark:bg-dark-700"></div>
        <h2 className="w-24 text-center text-sm uppercase tracking-wider text-dark-200 dark:text-dark-400">
          Projects
        </h2>
        <div className="h-[1px] flex-1 bg-dark-100  dark:bg-dark-700"></div>
      </header>
      <h3 className="mt-16 text-dark-200 leading-8 text-xl font-extralight tracking-wide ">
        Check out a few of my main projects I have worked on, or some of my side
        projects on the left-hand side.
      </h3>
      <section className="mt-10">
        <Project
          title={"MovieSaver"}
          tech={"Design and development"}
          src={"/MovieSaverSS.png"}
        />
        <Project
          title={"MovieSaver"}
          tech={"Design and development"}
          src={"/MovieSaverSS.png"}
        />
        <Project
          title={"MovieSaver"}
          tech={"Design and development"}
          src={"/MovieSaverSS.png"}
        />
        <Project
          title={"MovieSaver"}
          tech={"Design and development"}
          src={"/MovieSaverSS.png"}
        />
      </section>
    </section>
  );
}

export default ProjectsSection;
