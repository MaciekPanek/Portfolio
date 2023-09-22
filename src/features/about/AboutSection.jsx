import Heading from "../../ui/Heading";
import Paragraph from "./Paragraph";

function AboutSection() {
  return (
    <section className="h-max px-4 mb-40 py " id="about">
      <Heading>About</Heading>
      <p className="text-dark-200 leading-8 text-center mt-28 mb-28  italic  text-3xl font-extralight  ">
        Have a brief look at some details about me if you are interested :){" "}
      </p>
      <section className="flex flex-col md:flex-row gap-5 md:gap-10 md:justify-center md:items-start items-center  mb-20 ">
        <figure className="max-w-[640px] md:basis-1/2  ">
          <img
            className=" blur max-w-[350px] lg:max-w-[400px] "
            src="./portret-2.jpeg"
          />
        </figure>
        <article className=" lg:w-max  md:basis-1/2 lg:basis-auto">
          <Paragraph>
            My name is Maciek Panek. I am 20 years old, I live near city of
            Rzeszów, Poland, and I am a self taught frontend developer.
          </Paragraph>
          <Paragraph>
            My journey with programming began in June 2022, I picked it up out
            of boredom after work, at first it was just a hobby, but after six
            months I decided to make it my future career... and here I am.
          </Paragraph>
          <Paragraph>
            I love trying new technologies and programming languages, I started
            with Python and Java, then I fell in love with web dev, and now I am
            carving my way into digital design and fullstack technologies so I
            can expand my carrer spectrum.
          </Paragraph>
          <Paragraph>
            I really enjoy finding new things and ideas that I am able to
            implement into my daily life, whether it is for work, or my own
            benefit. It also gives an andvantage in other interests that I
            picked up, like astronomy or aerospace technology that I like to
            explore.
          </Paragraph>
        </article>
      </section>
    </section>
  );
}

export default AboutSection;
