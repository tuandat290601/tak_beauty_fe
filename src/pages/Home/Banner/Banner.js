import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";

import "./Banner.sass";
import { banners } from "../../../helpers/data";
import { createSetting } from "../../../helpers/SlickSettings";

const Banner = () => {
  const [setting, setSetting] = useState(null);

  useEffect(() => {
    createSetting(1, 1, true).then((x) => setSetting(x));
  }, []);

  return (
    <section id="banner" className="banner">
      <div className="pb-5">
        <Slider {...setting}>
          {banners.map((item, index) => {
            return (
              <div key={index} className="banner-item">
                <div className="banner-img">
                  <img src={item.img} alt="banner" />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Banner;
