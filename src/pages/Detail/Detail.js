import React from "react";

import "./Detail.sass";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productApi } from "../../api";
import configuration from "../../configuration"


const Detail = () => {
  const [product, setProduct] = useState(null)

  const { productId } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    if (productId && !product) {
      productApi.getProductDetails(productId).then(res => {
        if (res) {
          setProduct({
            ...res?.responseData?.rows[0],
            image: res?.responseData?.rows[0]?.image?.map(x => configuration.apiConfig.imageEndPoint + x)
          })
        }
        else {
          navigate("/404")
        }
      })
    }
  }, [productId, product])

  return <div className="main-product">
    <div class="main-product-breadcrumb">
      <div class="container">
        <div class="section-title-all">
          <h1>Tủ quần áo 3 cửa 6 ngăn F1GENZ cao cấp</h1>
        </div>
        <div class="breadcrumb-wrap">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Trang chủ</a></li>

            <li class="breadcrumb-item"><a href="/collections/tat-ca-san-pham">Tất cả sản phẩm</a></li>

            <li class="breadcrumb-item active"><span> Tủ quần áo 3 cửa 6 ngăn F1GENZ cao cấp</span></li>
          </ol>
        </div>
      </div>
    </div>
  </div>;
};

export default Detail;
