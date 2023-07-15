import React, { useEffect, useState } from "react";
import { ProductItem, SectionTitle } from "../../../components";

import Countdown from "react-countdown";
import { Link } from "react-router-dom";

import "./DiscountProduct.sass";
import TimeSpan from "./TimeSpan/TimeSpan";
import Slider from "react-slick";
import { createSetting } from "../../../helpers/SlickSettings";
import { products } from "../../../helpers/data";

const DiscountProduct = () => {
  // eslint-disable-next-line
  const [setting, setSetting] = useState(null);

  useEffect(() => {
    createSetting(4, 2).then((x) => setSetting(x));
  }, []);

  const timeSection = [
    {
      time: new Date().setHours(3, 0, 0, 0),
      duration: 1,
    },
    {
      time: new Date().setHours(10, 0, 0, 0),
      duration: 2,
    },
    {
      time: new Date().setHours(13, 0, 0, 0),
      duration: 1,
    },
    {
      time: new Date().setHours(20, 0, 0, 0),
      duration: 1,
    },
  ];

  return (
    <section id="discount-product">
      <SectionTitle title="Sản phẩm đang được ưu đãi giá tốt" />
      <div className="discount-product">
        <div className="container py-5">
          <div className="discount-product-headline row">
            <div className="col-6 d-flex align-items-center">
              <p className="me-3">KẾT THÚC SAU</p>
              <Countdown
                date={"07/12/2023"}
                daysInHours={false}
                zeroPadDays={2}
                zeroPadTime={2}
                className="btn custom-btn"
              ></Countdown>
            </div>
            <div className="col-6">
              <button className="btn custom-btn float-end">
                <Link to="/">Xem tất cả</Link>
              </button>
            </div>
          </div>
          <div className="discount-product-banner">
            <img
              src="https://theme.hstatic.net/200000584705/1001023835/14/home_fsale_item_image_2.jpg?v=10"
              alt="banner"
            />
          </div>
          <div className="dicount-product-content">
            <div className="discount-product-timespan d-flex justify-content-center my-3">
              {timeSection.map((time, index) => {
                return (
                  <div key={index}>
                    <TimeSpan {...time} />
                  </div>
                );
              })}
            </div>
            <div className="container px-0">
              {products?.length && (
                <Slider {...setting}>
                  {products.map((item, index) => {
                    return (
                      <div className="p-2" key={index}>
                        <ProductItem {...item} />
                      </div>
                    );
                  })}
                </Slider>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountProduct;
