import Heading from "../../ui/Heading";

function FooterSection() {
  return (
    <section>
      <Heading>Socials</Heading>

      <div className="flex items-center justify-around px-4 py-20 ">
        <a className="text-dark-300 text-xl hover:underline ">GitHub</a>
        <a className="text-dark-300 text-xl p-2  ">LinkedIn</a>
      </div>
    </section>
  );
}

export default FooterSection;
