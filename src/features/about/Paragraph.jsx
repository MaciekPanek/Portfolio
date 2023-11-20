import { motion } from "framer-motion";

function Paragraph({ children, delay }) {
  const variants = {
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
        delay: delay,
      },
    },
  };

  return (
    <motion.p
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className="text-dark-400 dark:text-dark-200 leading-8 mb-5 lg:mb-10 text-lg font-extralight italic lg:text-2xl "
    >
      {children}
    </motion.p>
  );
}

export default Paragraph;
