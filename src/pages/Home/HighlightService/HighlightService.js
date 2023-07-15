import React, { useEffect, useState } from "react";
import { SectionTitle } from "../../../components";
import Slider from "react-slick";

import "./HighlightService.sass";
import { Link } from "react-router-dom";
import { createSetting } from "../../../helpers/SlickSettings";

const HighlightService = () => {
  const [setting, setSetting] = useState(null);

  useEffect(() => {
    createSetting(4, 2).then((x) => setSetting(x));
  }, []);

  const list = [
    {
      img: "https://theme.hstatic.net/200000584705/1001023835/14/home_four_banner_image_1.png?v=10",
      name: "Dịch vụ 1",
      text: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, quasi?",
    },
    {
      img: "https://theme.hstatic.net/200000584705/1001023835/14/home_four_banner_image_2.png?v=10",
      name: "Dịch vụ 2",
      text: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, quasi?",
    },
    {
      img: "https://theme.hstatic.net/200000584705/1001023835/14/home_four_banner_image_3.png?v=10",
      name: "Dịch vụ 3",
      text: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, quasi?",
    },
    {
      img: "https://theme.hstatic.net/200000584705/1001023835/14/home_four_banner_image_4.png?v=10",
      name: "Dịch vụ 4",
      text: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, quasi?",
    },
    {
      img: "https://theme.hstatic.net/200000584705/1001023835/14/home_four_banner_image_1.png?v=10",
      name: "Dịch vụ 1",
      text: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, quasi?",
    },
    {
      img: "https://theme.hstatic.net/200000584705/1001023835/14/home_four_banner_image_2.png?v=10",
      name: "Dịch vụ 2",
      text: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, quasi?",
    },
    {
      img: "https://theme.hstatic.net/200000584705/1001023835/14/home_four_banner_image_3.png?v=10",
      name: "Dịch vụ 3",
      text: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, quasi?",
    },
    {
      img: "https://theme.hstatic.net/200000584705/1001023835/14/home_four_banner_image_4.png?v=10",
      name: "Dịch vụ 4",
      text: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, quasi?",
    },
  ];

  return (
    <section id="highlight-service" className="highlight">
      <SectionTitle title={"Dịch vụ nổi bật"} {...setting} />
      <div className="container py-5 px-0">
        {list?.length && (
          <Slider {...setting}>
            {list.map((item, index) => {
              return (
                <div className="p-2" key={index}>
                  <div className="highlight-item">
                    <h5>{item.text}</h5>
                    <div className="highlight-item-img">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <button className="btn custom-btn">
                      <Link to="/">{item.name}</Link>
                    </button>
                  </div>
                </div>
              );
            })}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default HighlightService;
