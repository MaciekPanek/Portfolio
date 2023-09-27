import { useDarkMode } from "../../context/DarkModeContext";
import Heading from "../../ui/Heading";

function FooterSection() {
  const { isDarkMode } = useDarkMode();

  const colors = {
    dark700: "#292929",
    dark600: "#373737",
  };

  if (!isDarkMode) {
    colors.dark700 = "#dadada";
    colors.dark600 = "#EDEDED";
  }

  return (
    <section id="contact">
      <Heading>Socials</Heading>

      <div className="flex items-center justify-around px-4 py-20 ">
        <a
          className="text-dark-300 text-xl hover:text-dark-200 hover:scale-105 "
          href="https://github.com/MaciekPanek"
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="text-dark-300 text-xl hover:text-dark-200 hover:scale-105"
          href="https://www.linkedin.com/in/maciej-panek-077748241/"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>

      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill={colors.dark700} />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill={colors.dark600} />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill={colors.dark700} />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill={colors.dark600} />
          </g>
        </svg>
      </div>
    </section>
  );
}

export default FooterSection;
