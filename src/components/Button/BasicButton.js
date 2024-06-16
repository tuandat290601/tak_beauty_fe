import React from "react";

const BasicButton = ({
  icon = <></>,
  title = "",
  className = "",
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`py-2 px-3 rounded-md flex items-center gap-x-2 ${className}`}
      {...props}
    >
      {icon}
      {title}
    </button>
  );
};

export default BasicButton;
