import React, { useEffect, useState } from "react";
import { ProductItem, SectionTitle } from "../../../components";

import Countdown from "react-countdown";
import { Link } from "react-router-dom";

import "./DiscountProduct.sass";
import TimeSpan from "./TimeSpan/TimeSpan";
import Slider from "react-slick";
import { createSetting } from "../../../helpers/SlickSettings";
import { useDispatch, useSelector } from "react-redux";
import { productApi } from "../../../api";
import { setMostDiscountList } from "../../../features/productSlice";
import useBreakpoint from "../../../hooks/useBreakpoint";

const DiscountProduct = () => {
  const mostDiscountList = useSelector(store => store.product.mostDiscountList)
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [setting, setSetting] = useState(null);

  const breakpoint = useBreakpoint();

  useEffect(() => {
    if (breakpoint < 576) {
      createSetting(2, 1).then((x) => setSetting(x));
    }
    else if (breakpoint < 768) {
      createSetting(3, 2).then((x) => setSetting(x));
    }
    else { createSetting(4, 2).then((x) => setSetting(x)); }
  }, [breakpoint]);

  useEffect(() => {
    if (mostDiscountList?.length === 0) {
      productApi.getProducts({
        payload: {
          sortField: "discount",
          sortOrder: "desc"
        }
      }).then(result => {
        dispatch(setMostDiscountList(result.responseData?.rows))
      })
    }
  }, [mostDiscountList])


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
              {mostDiscountList?.length && (
                <Slider {...setting}>
                  {mostDiscountList?.map((item, index) => {
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
