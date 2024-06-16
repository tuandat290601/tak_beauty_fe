const BasicIconButton = ({
  children,
  handleOnClick = () => {},
  className = "",
  disabled = false,
  ...props
}) => {
  return (
    <div
      className={`p-[8px] w-fit flex items-center justify-center
      border-1 border-gray-300 rounded-[4px] cursor-pointer bg-white hover:bg-slate-200  hover:shadow-md ${className} ${
        disabled ? "pointer-events-none opacity-50" : ""
      }`}
      onClick={handleOnClick}
      {...props}
    >
      {children}
    </div>
  );
};
export default BasicIconButton;
