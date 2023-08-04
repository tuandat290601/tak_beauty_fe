import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import "./Product.sass";
import { categoryProductList } from "../../helpers/data";
import { ProductItem } from "../../components";

const Product = () => {
  const [listProduct, setListProduct] = useState([])
  useEffect(() => {
    // api call
    setListProduct(categoryProductList[1])
  }, [])
  return (
    <div className="product-page">
      <div className="container">
        <div className="row">
          <div className="col-4">
            Filter
          </div>
          <div className="col-8">
            <div className="row">
              {listProduct?.products?.map((item, index) => <div className="col-4 p-3" key={index}>
                <ProductItem {...item} />
              </div>)}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;
