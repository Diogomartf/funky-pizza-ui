const NavButton = ({ href, children, onClick }) => (
  <a onClick={onClick} href={href} className="group h-fit">
    <p className="mb-2 text-3xl font-semibold uppercase transition md:mb-0 md:flex md:justify-center md:p-3 md:rounded-3xl md:font-medium md:text-sm text-darkRed md:bg-white hover:drop-shadow-lg hover:duration-200">
      {children}
    </p>
    <hr className="w-full border-2 md:w-28 border-tomato/20 group-hover:border-tomato md:hidden md:p-4" />
  </a>
);

export default NavButton;
