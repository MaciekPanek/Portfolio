import { LoremIpsum } from "react-lorem-ipsum";
import Heading from "../../ui/Heading";

function AboutSection() {
  return (
    <section className="h-max px-4 py " id="about">
      <Heading>About</Heading>
      <section className="py-52">
        <p className="text-dark-200 leading-8 text-lg ">
          {<LoremIpsum p={1} avgWordsPerSentence={1.5} />}
        </p>
        <figure className="max-w-[640px]">
          <img className=" blur max-h-[500px]  " src="./portret-2.jpeg" />
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
