import React from "react";

import "./Banner.sass";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-background"></div>
      <div className="banner-blur"></div>
      <div className="banner-title">
        <h1 className="text-white">Khóa học</h1>
      </div>
    </div>
  );
};

export default Banner;
