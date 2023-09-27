import Heading from "../../ui/Heading";
import Paragraph from "./Paragraph";
import { motion } from "framer-motion";

import { TbBrandVscode } from "react-icons/tb";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiSass,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

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

const variants2 = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      delay: 0.25,
    },
  },
};

function AboutSection() {
  return (
    <section className="h-max px-4 mb-40 py " id="about">
      <Heading>About</Heading>
      <motion.p
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="text-dark-200 leading-8 text-center mt-28 mb-28  italic  text-3xl font-extralight  "
      >
        Have a brief look at some details about me if you are interested :){" "}
      </motion.p>
      <section className="flex flex-col md:flex-row gap-5 md:gap-10 md:justify-center md:items-start items-center  mb-20 ">
        <figure className="max-w-[640px] md:basis-1/2  ">
          <motion.img
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" blur max-w-[350px] lg:max-w-[400px] "
            src="./portret-2.jpeg"
          />
        </figure>
        <article className=" lg:w-max  md:basis-1/2 lg:basis-auto">
          <Paragraph delay={0.1}>
            My name is Maciek Panek. I am 20 years old, I live near city of
            Rzeszów, Poland, and I am a self taught frontend developer.
          </Paragraph>
          <Paragraph delay={0.15}>
            My journey with programming began in June 2022, I picked it up out
            of boredom after work, at first it was just a hobby, but after six
            months I decided to make it my future career... and here I am.
          </Paragraph>
          <Paragraph delay={0.2}>
            I love trying new technologies and programming languages, I started
            with Python and Java, then I fell in love with web dev, and now I am
            carving my way into digital design and fullstack technologies so I
            can expand my carrer spectrum.
          </Paragraph>
          <Paragraph delay={0.25}>
            I really enjoy finding new things and ideas that I am able to
            implement into my daily life, whether it is for work, or my own
            benefit. It also gives an andvantage in other interests that I
            picked up, like astronomy or aerospace technology that I like to
            explore.
          </Paragraph>
          <motion.p
            variants={variants2}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="text-center text-dark-200 leading-8 mb-5 lg:mb-10 text-lg font-extralight lg:text-2xl"
          >
            My TechStack
          </motion.p>
          <motion.span
            variants={variants2}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="text-dark-300 flex gap-4 text-3xl items-center justify-center "
          >
            <TbBrandVscode />
            <SiHtml5 />
            <SiCss3 />
            <SiSass />
            <BiLogoJavascript />
            <FaReact />
            <SiTailwindcss />
            <SiFramer />
          </motion.span>
        </article>
      </section>
    </section>
  );
}

export default AboutSection;
