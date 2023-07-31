import React from "react";

import "./Product.sass";
import { Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Product;
