import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Product.css";

const Product = (props) => {
  const { handleAddToCart, product } = props;
  const { name, price, seller, ratings, img } = product;
  // console.log(props);
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-content">
        <p className="product-name">{name}</p>
        <p className="product-price">Price: ${price}</p>
        <p className="Manufacturer">Manufacturer: {seller}</p>
        <p className="Manufacturer">Rating: {ratings}</p>
      </div>
      <button
        // ?----------------- use an annoy func to sent data without auto call
        onClick={() => handleAddToCart(product)}
        className="btn-cart"
      >
        <p>Add To Cart</p>
        {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
      </button>
    </div>
  );
};

export default Product;
