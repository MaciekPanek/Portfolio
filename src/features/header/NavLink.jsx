function NavLink({ children, tailStyle, href }) {
  return (
    <a className={` nav-link ${tailStyle} `} href={href}>
      {children}
    </a>
  );
}

export default NavLink;
