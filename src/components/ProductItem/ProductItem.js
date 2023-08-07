import React, { useEffect, useState } from "react";
import { BsCart3, BsHeart, BsStarFill } from "react-icons/bs";

import "./ProductItem.sass";
import { toVNDCurrency } from "../../helpers/CurrencyUtil";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const { category, image, title, discountPrice, originPrice, rating, comments, buys } =
    props;

  const [show, setShow] = useState(null);

  useEffect(() => {
    setShow(image);
  }, [image]);

  const handleFavorite = () => {
    console.log(title);
  };

  return (
    <div className="product">
      <div className="product-item">
        <div className="product-item-image">
          <img src={show} alt={title} />
          {discountPrice && <span>-{discountPrice}%</span>}
          <ul>
            <li onClick={handleFavorite}>
              <BsHeart />
            </li>
            <li onClick={() => console.log("cart")}>
              <BsCart3 />
            </li>
          </ul>
        </div>
        <div className="product-item-subimages">
          {[image].map((img, index) => {
            return (
              <div key={index} onClick={() => setShow(img)}>
                <img src={img} alt={`${title}`} />
              </div>
            );
          })}
        </div>
        <Link to="">
          <div className="product-item-detail">
            <h2>{category.title}</h2>
            <h1>{title}</h1>
            <div className="originPrice">
              {toVNDCurrency(originPrice - (originPrice * discountPrice) / 100)}
              <span>{toVNDCurrency(originPrice)}</span>
            </div>
            <div className="rating">
              <StarRatingComponent
                title="rate2"
                editing={false}
                renderStarIcon={() => <BsStarFill />}
                starCount={5}
                value={rating}
              />
              <span>{`(${comments} đánh giá)`}</span>
            </div>
            <div className="buy">
              Lượt mua: <span>{buys}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
