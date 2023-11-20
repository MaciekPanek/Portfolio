import { motion } from "framer-motion";

const variantsImg = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.6, 0.5, 0.5, 0.9] },
  },
};

const variantsA = {
  initial: { scaleX: 0, originX: 0 },
  animate: {
    scaleX: 1,
    originX: [0, 0, 0, 0, 0, 0, 0.5],
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.9, 0.1, 0.3, 0.96],
      when: "beforeChildren",
      delayChildren: 0.15,
    },
  },
};
const variantsB = {
  initial: { y: 200, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      delay: 0.1,
    },
  },
};
const variantsC = {
  initial: { y: 200, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      delay: 0.15,
    },
  },
};
const variantsD = {
  initial: { y: 200, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      delay: 0.2,
    },
  },
};
const variantsE = {
  initial: { y: 200, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      delay: 0.25,
    },
  },
};

function Project({ title, tech, src, children, url, href }) {
  return (
    <article className=" mt-10 flex flex-col gap-3 lg:flex-row ">
      <motion.a
        variants={variantsA}
        initial="initial"
        whileInView="animate"
        whileTap={{ scale: 0.95 }}
        href={url}
        rel="noreferrer"
        target="_blank"
        viewport={{
          once: true,
        }}
      >
        <motion.img
          variants={variantsImg}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          src={src}
          className="min-[520px]:max-w-[500px] hover:scale-105 hover:transition-all hover:duration-500 "
        />
      </motion.a>

      <div className="flex flex-col gap-3 ">
        <motion.a
          variants={variantsB}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          href={url}
          rel="noreferrer"
          target="_blank"
        >
          <h3 className="text-dark-400 dark:text-dark-200 text-3xl hover:scale-110 hover:transition-all hover:duration-500 hover:-translate-x-[-15px] ">
            {title}
          </h3>
        </motion.a>
        <motion.a
          variants={variantsC}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="text-dark-400 italic text-sm hover:text-dark-300  "
          href={href}
        >
          GitHub Repo &rarr;
        </motion.a>

        <motion.p
          variants={variantsD}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="text-dark-400 italic text-sm "
        >
          {tech}
        </motion.p>
        <motion.p
          variants={variantsE}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="text-dark-400 dark:text-dark-200  italic text-lg max-w-[500px] lg:w-[500px] "
        >
          {children}
        </motion.p>
      </div>
    </article>
  );
}

export default Project;
