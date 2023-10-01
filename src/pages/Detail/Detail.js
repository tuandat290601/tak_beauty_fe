import React from "react";

import "./Detail.sass";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { productApi } from "../../api";
import configuration from "../../configuration"
import { useQuery } from "@tanstack/react-query";


const Detail = () => {
  const [product, setProduct] = useState(null)

  const { productId } = useParams()

  const {data, isSuccess} = useQuery({
    queryKey: ["getProductDetails", productId],
    queryFn: async ({signal}) => {
      return await productApi.getProductDetails(productId)
    }
  })

  useEffect(() => {
    if(isSuccess) {
      let productData = data.responseData.rows[0]
      productData = {...productData, image: productData.image.map(img => configuration.apiConfig.imageEndPoint + img)}
      setProduct(productData)
    }
  }, [isSuccess, data])

  return <div className="main-product">
    <div class="main-product-breadcrumb">
      <div class="container">
        <div class="section-title-all">
          <h1>Tủ quần áo 3 cửa 6 ngăn F1GENZ cao cấp</h1>
        </div>
        <div class="breadcrumb-wrap">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><Link to = "/">Trang chủ</Link></li>
            <li class="breadcrumb-item"><Link to ="/san-pham">Tất cả sản phẩm</Link></li>
            <li class="breadcrumb-item active">{product && <span>{product.title}</span>}</li>
          </ol>
        </div>
      </div>
    </div>
  </div>;
};

export default Detail;
