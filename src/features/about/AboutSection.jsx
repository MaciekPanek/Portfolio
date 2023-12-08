import Heading from '../../ui/Heading';
import Paragraph from './Paragraph';
import { motion } from 'framer-motion';

import { TbBrandVscode } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiFramer,
  SiSass,
  SiHtml5,
  SiCss3,
  SiSupabase,
  SiTypescript,
  SiNextdotjs,
  SiJavascript,
  SiStyledcomponents,
  SiNodedotjs,
} from 'react-icons/si';
import Tip from './Tip';
// import { Tooltip as React } from "react-tooltip";

const variants = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
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
      type: 'spring',
      duration: 1,
      delay: 0.25,
    },
  },
};

function AboutSection() {
  return (
    <section className='h-max px-4 mb-40 py ' id='about'>
      <Heading>About</Heading>
      <motion.p
        variants={variants}
        initial='initial'
        whileInView='animate'
        viewport={{
          once: true,
        }}
        className='text-dark-400 dark:text-dark-200 leading-8 text-center mt-28 mb-28  italic  text-3xl font-extralight  '>
        Have a brief look at some details about me if you are interested :)
      </motion.p>
      <section className='flex flex-col md:flex-row gap-5 md:gap-10 md:justify-center md:items-start items-center  mb-20 '>
        <figure className='max-w-[640px] md:basis-1/2  '>
          <motion.img
            variants={variants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            className=' rounded-lg max-w-[350px] lg:max-w-[400px] '
            src='./portret-3.jpeg'
          />
        </figure>
        <article className=' lg:w-max  md:basis-1/2 lg:basis-auto'>
          <Paragraph delay={0.1}>
            My name is Maciek Panek. I am 20 years old, I live near city of
            Rzeszów, Poland, and I am a self-taught frontend developer.
          </Paragraph>
          <Paragraph delay={0.15}>
            My journey with programming began in June 2022, I picked it up out
            of boredom after work, at first it was just a hobby, but after six
            months I decided to make it my future career... and here I am.
          </Paragraph>
          <Paragraph delay={0.2}>
            I love trying new technologies and programming languages. I have
            started with Python and Java, then I fell in love with web dev, and
            now I am carving my way into more technologies so I can expand my
            career spectrum.
          </Paragraph>
          <Paragraph delay={0.25}>
            I really enjoy finding new things and ideas that I am able to
            implement into my daily life, whether it is for work, or my own
            benefit. It also gives an advantage in other interests that I picked
            up, like astronomy or aerospace technology that I like to explore.
          </Paragraph>
          <motion.p
            variants={variants2}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            className='text-center text-dark-400 dark:text-dark-200 leading-8 mb-5 lg:mb-10 text-lg font-extralight lg:text-2xl'>
            My TechStack
          </motion.p>
          <motion.span
            variants={variants2}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            className='text-dark-300 flex gap-4 text-3xl items-center justify-center '>
            <Tip id='vscode' content='Visual Studio Code'>
              <TbBrandVscode />
            </Tip>
            <Tip id='html' content='HTML5'>
              <SiHtml5 />
            </Tip>
            <Tip id='css' content='CSS3'>
              <SiCss3 />
            </Tip>
            <Tip id='javascript' content='JavaScript'>
              <SiJavascript />
            </Tip>
            <Tip id='typescript' content='TypeScript'>
              <SiTypescript />
            </Tip>
            <Tip id='react' content='React'>
              <FaReact />
            </Tip>
            <Tip id='tailwind' content='Tailwind CSS'>
              <SiTailwindcss />
            </Tip>
            <Tip id='framer' content='Framer Motion'>
              <SiFramer />
            </Tip>
            <Tip id='sass' content='Sass'>
              <SiSass />
            </Tip>
            <Tip content='Supabase' id='supabase'>
              <SiSupabase />
            </Tip>
            <Tip content='Styled Components' id='styled'>
              <SiStyledcomponents />
            </Tip>
          </motion.span>
          <motion.p
            variants={variants2}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            className='text-center text-dark-400 dark:text-dark-200 leading-8 mb-5 lg:mb-10 mt-20 text-lg font-extralight lg:text-2xl'>
            Technologies I learn now or in the future{' '}
          </motion.p>
          <motion.span
            variants={variants2}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            className='text-dark-300 flex gap-4 mt-10 text-3xl items-center justify-center '>
            {/* <Tip id='typescript' content='TypeScript'>
              <SiTypescript />
            </Tip> */}
            <Tip id='nextjs' content='Next.js'>
              <SiNextdotjs />
            </Tip>
            <Tip id='nodejs' content='Node.js'>
              <SiNodedotjs />
            </Tip>
          </motion.span>
        </article>
      </section>
      {/* <Tooltip effect="solid" place="top" type="dark" id="framer" /> */}
    </section>
  );
}

export default AboutSection;
