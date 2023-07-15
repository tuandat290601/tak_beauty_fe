import React, { useEffect, useState } from "react";
import { ProductItem, SectionTitle } from "../../../components";
import { categoryProductList } from "../../../helpers/data";

import "./Products.sass";
import { createSetting } from "../../../helpers/SlickSettings";
import Slider from "react-slick";

const Products = () => {
  const [show, setShow] = useState(null);
  const [setting, setSetting] = useState(null);

  useEffect(() => {
    createSetting(4, 2).then((x) => setSetting(x));
    setShow(categoryProductList[0]);
  }, []);

  return (
    <section id="products" className="products">
      <SectionTitle title="Sản phẩm" />
      <div className="container">
        <div className="row p-3">
          <div className="col-3 p-0 products-controller">
            <ul>
              {categoryProductList.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="p-2 w-100"
                    onClick={() => setShow(item)}
                  >
                    <button className="btn custom-btn w-100">
                      {<h1 className="m-0">{item.name}</h1>}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-9 p-2 products-banner">
            <img src={show?.image} alt={show?.name} />
          </div>
        </div>
      </div>
      <div className="container pb-3 px-3">
        {show?.products?.length && (
          <Slider {...setting}>
            {show?.products?.map((item, index) => {
              return (
                <div className="p-2" key={index}>
                  <ProductItem {...item} />
                </div>
              );
            })}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default Products;
