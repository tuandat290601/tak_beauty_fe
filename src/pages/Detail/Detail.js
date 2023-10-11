import React from "react";

import "./Detail.sass";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productApi } from "../../api";
import configuration from "../../configuration";
import { useQuery } from "@tanstack/react-query";
import { createSetting } from "../../helpers/SlickSettings";
import Slider from "react-slick";
import { Image } from "../../components";
import StarRatingComponent from "react-star-rating-component";
import { BsStarFill } from "react-icons/bs";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";

const Detail = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [setting, setSetting] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { data, isSuccess } = useQuery({
    queryKey: ["getProductDetails", productId],
    queryFn: async ({ signal }) => {
      return await productApi.getProductDetails(productId);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      let productData = data.responseData.rows[0];
      if (productData) {
        productData = {
          ...productData,
          image: productData.image.map(
            (img) => configuration.apiConfig.imageEndPoint + img
          ),
          category: productData.connects.find(
            (x) => x.category?.parentId === null
          ).category,
        };
        setProduct(productData);
      }
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (product) {
      createSetting(1, 1).then((x) => setSetting(x));
    }
  }, [product]);

  console.log(product);

  return (
    <>
      {product && (
        <div className="main-product">
          <div class="main-product-breadcrumb">
            <div class="container">
              <div class="section-title-all">
                <h1>{product.title}</h1>
              </div>
              <div class="breadcrumb-wrap">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li class="breadcrumb-item">
                    <Link to="/san-pham">Tất cả sản phẩm</Link>
                  </li>
                  <li class="breadcrumb-item active">
                    {product && <span>{product.category.title}</span>}
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="main-product-content py-4">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-5">
                  {product.image && (
                    <Slider {...setting}>
                      {product.image.map((img, index) => (
                        <div className="slide-container">
                          <div key={index} className="main-product-image">
                            <Image src={img} alt={product.title} />
                          </div>
                        </div>
                      ))}
                    </Slider>
                  )}
                </div>
                <div className="col-12 col-md-7 ps-3">
                  <div className="row">
                    <h1>{product.title}</h1>
                  </div>
                  <div className="row my-4">
                    <div className="col-6">
                      <strong>Mã sản phẩm:</strong> {product.sku}
                    </div>
                    <div className="col-6">
                      <strong>Xuất xứ:</strong>
                    </div>
                    <div className="col-6">
                      <strong>Loại sản phẩm:</strong>
                    </div>
                    <div className="col-6">
                      <strong>Loại:</strong>
                    </div>
                  </div>
                  <hr style={{ width: "100%" }} />
                  <div className="row my-4">
                    <div className="col-12 col-xl-8 d-flex flex-column flex-md-row">
                      {+product.discountPercent !== 0 ? (
                        <>
                          <span>{product.originPrice}</span>
                          <h4>{product.discountPrice}</h4>
                          <div>Tiết kiệm {+product.discountPercent}%</div>
                        </>
                      ) : (
                        <>
                          <h4>{product.discountPrice}</h4>
                        </>
                      )}
                    </div>
                    <div className="col-12 col-xl-4 d-flex align-items-center justify-content-end">
                      <StarRatingComponent
                        title="rate2"
                        editing={false}
                        renderStarIcon={() => <BsStarFill />}
                        starCount={5}
                        value={product.rating}
                        name="rating"
                      />
                      <span className="ms-1">
                        (
                        {
                          product.connects.filter(
                            (connect) => connect.feedbackId !== null
                          ).length
                        }{" "}
                        đánh giá)
                      </span>
                    </div>
                  </div>
                  <hr />
                  <div className="row my-4">
                    <div class="main-product-quantity shop-quantity-wrap">
                      <label className="me-3">Số lượng</label>
                      <div class="shop-quantity">
                        <button
                          type="button"
                          data-type="shop-quantity-minus"
                          title="Giảm"
                          onClick={() =>
                            setQuantity((old) => {
                              return old === 1 ? old : old - 1;
                            })
                          }
                        >
                          -
                        </button>
                        <input
                          type="number"
                          name="quantity"
                          value={quantity}
                          min="1"
                          readonly=""
                        />
                        <button
                          type="button"
                          data-type="shop-quantity-plus"
                          title="Tăng"
                          onClick={() => setQuantity((old) => old + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-6">
                      <button className="btn custom-btn add-cart-btn">
                        Thêm vào giỏ
                      </button>
                    </div>
                    <div className="col-6">
                      <Link
                        to="/"
                        target="_blank"
                        className="btn custom-btn add-cart-btn"
                      >
                        Tư vấn ngay
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-8">
                  <Description detail={product.detail} />
                </div>
              </div>
              <div className="row">
                <Feedback />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
