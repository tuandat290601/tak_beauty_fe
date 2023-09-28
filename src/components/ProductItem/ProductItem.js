import React, { useEffect, useState } from "react";
import { BsCart3, BsHeart, BsStarFill } from "react-icons/bs";

import "./ProductItem.sass";
import { toVNDCurrency } from "../../helpers/CurrencyUtil";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const { id, image, title, discountPrice, originPrice, rating, connects, sold, discountPercent } =
    props;

  const [show, setShow] = useState(null);

  useEffect(() => {
    if (show == null && image && image.length > 0) {
      setShow(image[0]);
    }
  }, [show, image]);

  const handleFavorite = () => {
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
          {image?.map((img, index) => {
            return (
              <div key={index} onClick={() => setShow(img)} style={{ border: `${img === show ? "1px solid black" : "1px solid transparent"}` }}>
                <img src={img} alt={`${title}`} />
              </div>
            );
          })}
        </div>
        <Link to={`/san-pham/${id}`}>
          <div className="product-item-detail">
            <h1>{title}</h1>
            <div className="price">
              {
                +discountPrice > 0 ? 
                <>
                <div>
                  <span>{toVNDCurrency(+originPrice)}</span>
              <br />
              {toVNDCurrency(+discountPrice)}
                </div>
                </> : 
                <div>
                  <span>{toVNDCurrency(+discountPrice)}</span>
                </div>
              }
            </div>
            <div className="rating">
              <StarRatingComponent
                title="rate2"
                editing={false}
                renderStarIcon={() => <BsStarFill />}
                starCount={5}
                value={rating}
                name="rating"
              />
              <span>{`(${connects?.filter(con => con?.feedback?.type === 'RATING').length} đánh giá)`}</span>
            </div>
            <div className="buy">
              Lượt mua: <span>{sold}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
