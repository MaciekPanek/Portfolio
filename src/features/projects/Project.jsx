function Project({ title, tech, src, children, url, href }) {
  return (
    <article className=" mt-10 flex flex-col gap-3 lg:flex-row ">
      <a href={url} rel="noreferrer" target="_blank">
        <img
          src={src}
          className="min-[520px]:max-w-[500px] hover:scale-105 hover:transition-all hover:duration-500 "
        />
      </a>

      <div className="flex flex-col gap-3 ">
        <a href={url} rel="noreferrer" target="_blank">
          <h3 className="text-dark-200 text-3xl hover:scale-110 hover:transition-all hover:duration-500 hover:-translate-x-[-15px] ">
            {title}
          </h3>
        </a>
        <a className="text-dark-400 italic text-sm " href={href}>
          GitHub Repo &rarr;
        </a>

        <p className="text-dark-400 italic text-sm ">{tech}</p>
        <p className="text-dark-200  italic text-lg max-w-[500px] lg:w-[500px] ">
          {children}
        </p>
      </div>
    </article>
  );
}

export default Project;
