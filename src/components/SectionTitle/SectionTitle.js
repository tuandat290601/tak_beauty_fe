import React from "react";

import "./SectionTitle.sass";

const SectionTitle = (props) => {
  const { title } = props;
  return (
    <div className="section-title">
      <div className="container">
        <h1>{title}</h1>
        <span></span>
      </div>
    </div>
  );
};

export default SectionTitle;
