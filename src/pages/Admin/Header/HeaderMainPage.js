import React from "react";

const HeaderMainPage = ({ children }) => {
  return (
    <div className="action-bar bg-white h-auto fixed z-[99] top-0 left-[230px] right-0 overflow-hidden">
      {children}
    </div>
  );
};

export default HeaderMainPage;
