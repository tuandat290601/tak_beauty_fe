import React, { useEffect, useState } from "react";
import { ProductItem, SectionTitle } from "../../../components";

import "./Products.sass";
import { createSetting } from "../../../helpers/SlickSettings";
import Slider from "react-slick";
import useCategories from "../../../hooks/Categories/useCategories";
import { productApi } from "../../../api";

const Products = () => {
  const [show, setShow] = useState(null);
  const [setting, setSetting] = useState(null);
  const { categoryList } = useCategories({});
  const [parentCategories, setParentCategories] = useState(null)
  const [productShow, setProductShow] = useState(null)

  useEffect(() => {
    createSetting(4, 2).then(x => setSetting(x))
  }, [])

  useEffect(() => {
    if (!parentCategories) {
      setParentCategories(categoryList?.responseData?.rows?.filter(category => category.parentId !== null))
    }
    if (!show && parentCategories) {
      setShow(parentCategories[0])
    }
  }, [categoryList, parentCategories, show])

  useEffect(() => {
    if (show) {
      productApi.getProducts({
        payload: {
          currentPage: 1,
          pageSize: 10,
          categoryListIds: [show.id]
        }
      }).then(result => setProductShow(result.responseData.rows))
    }
  }, [show])


  return (
    <section id="products" className="products">
      <SectionTitle title="Sản phẩm" />
      <div className="container">
        <div className="row p-3">
          <div className="col-3 p-0 products-controller">
            <ul>
              {parentCategories?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="p-2 w-100"
                    onClick={() => setShow(item)}
                  >
                    <button className="btn custom-btn w-100">
                      {<h1 className="m-0">{item.title}</h1>}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-9 p-2 products-banner">
            <img src={show?.image} alt={show?.title} />
          </div>
        </div>
      </div>
      <div className="container pb-3 px-3">
        {productShow?.length && (
          <Slider {...setting}>
            {productShow?.map((item, index) => {
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
