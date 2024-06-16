import React from "react";

const HeaderMainPage = ({ children, isBottom = false, className = "" }) => {
  return (
    <div
      className={`action-bar bg-white h-auto fixed z-[99] ${
        isBottom ? "" : "top-0"
      } left-[230px] right-0 overflow-hidden ${className} `}
    >
      {children}
    </div>
  );
};

export default HeaderMainPage;
