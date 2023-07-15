import React from "react";
import { ProductItem, SectionTitle } from "../../../components";

import "./BestSeller.sass";
import { products } from "../../../helpers/data";

const BestSeller = () => {
  return (
    <section id="best-seller">
      <SectionTitle title="Sản phẩm được mua nhiều nhất" />
      <div className="container">
        <div className="row p-3 justify-content-center">
          {products.map((item, index) => {
            return (
              <div className="col-3 p-2" key={index}>
                <ProductItem {...item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
