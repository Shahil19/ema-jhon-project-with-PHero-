import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  return (
    <div className="cart">
      <h3>Order Summary </h3>
      <p>Selected Item: {cart.length}</p>
    </div>
  );
};

export default Cart;
