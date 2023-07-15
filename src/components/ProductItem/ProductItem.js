import React, { useEffect, useState } from "react";
import { BsCart3, BsHeart, BsStarFill } from "react-icons/bs";

import "./ProductItem.sass";
import { toVNDCurrency } from "../../helpers/CurrencyUtil";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const { category, images, name, discount, price, rate, comments, buys } =
    props;

  const [show, setShow] = useState(null);

  useEffect(() => {
    setShow(images[0]);
  }, [images]);

  const handleFavorite = () => {
    console.log(name);
  };

  return (
    <div className="product">
      <div className="product-item">
        <div className="product-item-image">
          <img src={show} alt={name} />
          {discount && <span>-{discount}%</span>}
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
          {images.map((img, index) => {
            return (
              <div key={index} onClick={() => setShow(img)}>
                <img src={img} alt={`${img.name}${index}`} />
              </div>
            );
          })}
        </div>
        <Link to="">
          <div className="product-item-detail">
            <h2>{category}</h2>
            <h1>{name}</h1>
            <div className="price">
              {toVNDCurrency(price - (price * discount) / 100)}
              <span>{toVNDCurrency(price)}</span>
            </div>
            <div className="rating">
              <StarRatingComponent
                name="rate2"
                editing={false}
                renderStarIcon={() => <BsStarFill />}
                starCount={5}
                value={rate}
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
