import { BsArrowDownRight } from "react-icons/bs";

function IntroductionSection() {
  return (
    <section className="h-max px-4 lg:flex lg:my-60 " id="intro">
      <div>
        <h1 className="text-stone-200 leading-[3.5rem] superpixel-antialiased text-5xl font-medium md:text-6xl lg:text-7xl ">
          I design and develop applications .
        </h1>
        <h3 className="text-stone-400 text-xl leading-10 mt-[3rem] ">
          I am full-time frontend developer with a passion for great design and
          user experiences
        </h3>
        <button className="text-dark-300 text-3xl mt-16 flex gap-2 items-center font-light ">
          Explore my projects <BsArrowDownRight />
        </button>
      </div>
      <section>
        <div className="container lg:mt-24 ">
          <span className="react-logo">
            <span className="nucleo"></span>
          </span>
        </div>
      </section>
    </section>
  );
}

export default IntroductionSection;
