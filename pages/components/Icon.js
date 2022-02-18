const Icon = ({ link, children }) => {
  const classNames =
    "flex items-center justify-center w-14 h-14 rounded-full bg-tomato/20 hover:bg-tomato/50 cursor-pointer";
  return link ? (
    <a href={link} className={classNames}>
      {children}
    </a>
  ) : (
    <div className={classNames}>{children}</div>
  );
};

export default Icon;
