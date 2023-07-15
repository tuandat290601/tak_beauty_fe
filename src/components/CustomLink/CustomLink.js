import React from "react";
import { Link } from "react-router-dom";

import "./CustomLink.sass";

const CustomLink = (props) => {
  const { path, text, icon, styleClass } = props;
  return (
    <button className={`btn custom-btn ${styleClass}`}>
      <Link to={path}>
        {text} {icon && icon}
      </Link>
    </button>
  );
};

export default CustomLink;
