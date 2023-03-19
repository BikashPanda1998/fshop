import React from "react";
import "./Productcard.css";

const ProductCard = (props) => {
    const {title, imgUrl, price}=props.item
  return (
    <div className="single-product p-3">
      <div className="product-img">
        <img src={imgUrl} alt={title} className="w-100" />
      </div>
      <div className="product-content">
        <div className="rating text-center">
          <span>
            <i className="ri-star-s-fill" style={{ color: "orange" }}></i>
          </span>
          <span>
            <i className="ri-star-s-fill" style={{ color: "orange" }}></i>
          </span>
          <span>
            <i className="ri-star-s-fill" style={{ color: "orange" }}></i>
          </span>
          <span>
            <i className="ri-star-s-fill" style={{ color: "orange" }}></i>
          </span>
          <span>
            <i className="ri-star-s-fill" style={{ color: "orange" }}></i>
          </span>
        </div>
        <h6 className="text-center">{title}</h6>
        <div className="d-flex align-items-center justify-content-center">
          <span>
            Price: ₨<span> {price}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
