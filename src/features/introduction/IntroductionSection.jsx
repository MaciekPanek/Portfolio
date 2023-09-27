import { BsArrowDownRight } from "react-icons/bs";
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
    },
  },
};
const variants2 = {
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
      delay: 0.1,
    },
  },
};
const variants3 = {
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

function IntroductionSection() {
  return (
    <section className="h-max px-4 lg:flex lg:my-60 " id="intro">
      <div>
        <motion.h1
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="dark:text-stone-300 text-dark-300 leading-[3.5rem] superpixel-antialiased text-5xl font-medium md:text-6xl lg:text-7xl "
        >
          I develop and bring projects to life.
        </motion.h1>
        <motion.h3
          variants={variants2}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="dark:text-stone-400 text-dark-300 text-xl leading-10 mt-[3rem] "
        >
          I am frontend developer with passion and great sense of aesthetics.
        </motion.h3>
        <motion.a
          variants={variants3}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          href="/#projects"
          className="text-dark-300 text-3xl mt-16 flex gap-2 items-center font-light hover:scale-105 hover:transition-all hover:duration-500 hover:-translate-x-[-15px] "
        >
          Have a look at my projects{" "}
          <BsArrowDownRight className=" hover:-translate-x-[-7px] hover:-translate-y-[-7px] hover:transition-all hover:duration-500 " />
        </motion.a>
      </div>
      <section>
        <div className="container lg:mt-24 ">
          <span className="react-logo ">
            <span className="nucleo"></span>
          </span>
        </div>
      </section>
    </section>
  );
}

export default IntroductionSection;
