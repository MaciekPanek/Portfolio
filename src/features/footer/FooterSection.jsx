function FooterSection() {
  return (
    <section>
      <header className="flex items-center " id="contact">
        <div className="h-[1px] flex-1 bg-dark-100  dark:bg-dark-700"></div>
        <h2 className="w-24 text-center text-sm uppercase tracking-wider text-dark-200 dark:text-dark-400">
          Socials
        </h2>
        <div className="h-[1px] flex-1 bg-dark-100  dark:bg-dark-700"></div>
      </header>

      <div className="flex items-center justify-around px-4 py-20 ">
        <a className="text-dark-300 text-xl hover:underline ">GitHub</a>
        <a className="text-dark-300 text-xl p-2  ">LinkedIn</a>
      </div>
    </section>
  );
}

export default FooterSection;
