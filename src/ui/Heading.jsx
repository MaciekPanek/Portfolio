function Heading({ children }) {
  return (
    <header className="flex items-center ">
      <div className="h-[1px] flex-1 bg-dark-100  dark:bg-dark-700"></div>
      <h2 className="w-24 text-center text-sm uppercase tracking-wider text-dark-200 dark:text-dark-400">
        {children}
      </h2>
      <div className="h-[1px] flex-1 bg-dark-100  dark:bg-dark-700"></div>
    </header>
  );
}

export default Heading;
