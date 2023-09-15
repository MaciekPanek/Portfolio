function MobileHeader() {
  return (
    <>
      <a className="fixed top-8 left-4 z-30 md:hidden" href="/#">
        <img src="/Logo.png" />
      </a>
      <button
        type="button"
        aria-label="Open menu"
        className="fixed top-8 right-4 z-30 text-dark-100 mix-blend-difference hover:opacity-60 dark:text-white md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="lightgrey"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="square"
            strokeWidth="1.5"
            d="M4 6h16M4 12h16m-7 6h7"
            pathLength="1"
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
          ></path>
        </svg>
      </button>
    </>
  );
}

export default MobileHeader;
