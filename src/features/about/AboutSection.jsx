import { LoremIpsum } from "react-lorem-ipsum";

function AboutSection() {
  return (
    <section className="h-max px-4 " id="about">
      <header className="flex items-center ">
        <div className="h-[1px] flex-1 bg-dark-100  dark:bg-dark-700"></div>
        <h2 className="w-24 text-center text-sm uppercase tracking-wider text-dark-200 dark:text-dark-400">
          About
        </h2>
        <div className="h-[1px] flex-1 bg-dark-100  dark:bg-dark-700"></div>
      </header>
      <p className="text-dark-200 leading-8 text-lg ">
        {<LoremIpsum p={1} avgWordsPerSentence={1.5} />}
      </p>
      <section>
        <figure className="max-w-[640px]">
          <img className=" blur  " src="./MovieSaverSS.png" />
        </figure>
        <article>
          <p className="text-dark-200 leading-8 mt-5 text-lg ">
            {<LoremIpsum p={1} avgWordsPerSentence={1.5} />}
          </p>
          <p className="text-dark-200 leading-8 mt-5 text-lg ">
            {<LoremIpsum p={1} avgWordsPerSentence={1.5} />}
          </p>
          <p className="text-dark-200 leading-8 mt-5 text-lg ">
            {<LoremIpsum p={1} avgWordsPerSentence={1.5} />}
          </p>
        </article>
      </section>
    </section>
  );
}

export default AboutSection;
