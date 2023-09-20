function Project({ title, tech, src }) {
  return (
    <article className="max-w-[640px] mt-10 ">
      <img src={src} />
      <p className="text-dark-400 mt-3 italic text-sm ">{tech}</p>
      <h3 className="text-dark-200 text-3xl mt-3 ">{title}</h3>
    </article>
  );
}

export default Project;
