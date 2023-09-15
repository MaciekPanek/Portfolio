import { BsArrowDownRight } from "react-icons/bs";

function IntroductionSection() {
  return (
    <section className="h-max px-4">
      <h1 className="text-stone-200 text-[50px] leading-[3.5rem] superpixel-antialiased ">
        I design and develop applications.
      </h1>
      <h3 className="text-stone-400 text-xl leading-10 mt-[3rem] ">
        {`I'm full-time frontend developer with a passion for great design and
        user experiences`}
      </h3>
      <button className="text-dark-300 text-3xl mt-16 flex gap-2 items-center font-light ">
        Explore my projects <BsArrowDownRight />
      </button>
      <section>
        <div className="container  ">
          <span className="react-logo">
            <span className="nucleo"></span>
          </span>
        </div>
      </section>
    </section>
  );
}

export default IntroductionSection;
