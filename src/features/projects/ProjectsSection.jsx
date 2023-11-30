import Heading from '../../ui/Heading';
import Project from './Project';
import { motion } from 'framer-motion';
import SideProject from './SideProject';

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

function ProjectsSection() {
  return (
    <section className='h-max px-4 pb-28 ' id='projects'>
      <Heading>Projects</Heading>
      <motion.h3
        variants={variants}
        initial='initial'
        whileInView='animate'
        viewport={{
          once: true,
        }}
        className='mt-16 text-dark-400 dark:text-dark-200 leading-[3rem] text-center text-[50px] font-extralight italic tracking-wide '>
        Check out a few of my main projects.
      </motion.h3>
      <section className='mt-10 flex flex-col items-center  '>
        <Project
          title={'MovieSaver'}
          tech={'JavaScript React, ReactQuery, Tailwind, Motion Framer'}
          src={'/movie-saver.jpeg'}
          url={'https://movie-saver-three.vercel.app/'}
          href={'https://github.com/MaciekPanek/MovieSaver'}>
          MovieSaver is a website, where you can search and bookmark your favourite movies or tv shows you already
          watched, or add new ones to your watchlist.
        </Project>
        <Project
          title={'Villa Rental'}
          tech={'JavaScipt React, ReactQuery, Tailwind, supabase'}
          src={'/villa-rental.jpeg'}
          url={'https://villa-rental.vercel.app/'}
          href={'https://github.com/MaciekPanek/Dashboard'}>
          Villa Rental is a website only for employees of the company. It is designed for desktops and tablets.
          Employees can book new guests, create new villas for rent and check important data from last 30 days on main
          dashboard.
        </Project>
        <Project
          title={'Upcoming project'}
          tech={'TypeScript React'}
          src={'/next-project.jpeg'}
          imgClassname={'blur'}
          // url={'https://villa-rental.vercel.app/'}
          // href={'https://github.com/MaciekPanek/Dashboard'}
        >
          I am building this project with TypeScript as to show my skills in the language, coming soon...
        </Project>
        <motion.h4
          variants={variants}
          initial='initial'
          whileInView='animate'
          viewport={{
            once: true,
          }}
          className='mt-16 text-dark-400 dark:text-dark-200 leading-[3rem] text-center text-[35px] font-extralight italic tracking-wide '>
          And couple of small projects
        </motion.h4>
        <div className='flex flex-wrap gap-10 justify-center'>
          <SideProject
            title={'Weather app'}
            tech={'Vanilla JavaScript'}
            src={'/weather-app.jpeg'}
            url={'https://weather-app-alpha-opal.vercel.app/'}
          />
          <SideProject
            title={'Todo list'}
            tech={'Vanilla JavaScript'}
            src={'/todo-list.jpeg'}
            url={'https://todo-list-eight-murex-54.vercel.app/'}
          />
        </div>
      </section>
    </section>
  );
}

export default ProjectsSection;
