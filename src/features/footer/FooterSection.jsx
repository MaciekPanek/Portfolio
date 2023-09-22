import Heading from "../../ui/Heading";

function FooterSection() {
  return (
    <section id="contact">
      <Heading>Socials</Heading>

      <div className="flex items-center justify-around px-4 py-20 ">
        <a className="text-dark-300 text-xl ">GitHub</a>
        <a className="text-dark-300 text-xl">LinkedIn</a>
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
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="#292929" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="#373737" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="#292929" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#373737" />
          </g>
        </svg>
      </div>
    </section>
  );
}

export default FooterSection;

// 50: "#EDEDED",
// 100: "#dadada",
// 200: "#b5b5b5",
// 300: "#8f8f8f",
// 400: "#6a6a6a",
// 500: "#454545",
// 600: "#373737",
// 700: "#292929",
// 800: "#1c1c1c",
// 850: "#171717",
// 900: "#0e0e0e",
