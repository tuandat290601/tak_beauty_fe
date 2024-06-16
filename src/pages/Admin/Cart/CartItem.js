import React, { useEffect, useState } from "react";
import axiosClient from "../../../api/axiosClient";

const CartItem = (item) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axiosClient
      .get("/products?filters=id==" + item.productId)
      .then((res) => setProduct(res.responseData.rows[0]));
  }, [item]);

  console.log(product);

  return (
    <>
      {product && (
        <tr key={product.id}>
          <td className="flex items-center w-128">
            <img
              style={{ width: "40px", height: "40px", marginRight: "8px" }}
              src={"http://112.78.3.135:3000" + product?.image?.split(";")[0]}
            />
            {product.title}
          </td>
          <td>{item.amount}</td>
          <td>{parseInt(product.discountPrice)}</td>
          <td>{item.amount * parseInt(product.discountPrice)}</td>
        </tr>
      )}
    </>
  );
};

export default CartItem;
