import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // ! module 48-7
  // use state for order summary
  const [cart, setCart] = useState([]);

  // ?----------- sent event handler as attribute and get as object value (props)
  const handleAddToCart = (product) => {
    // ?------------- newCart = cart + product (...cart = only cart property)
    const newCart = [...cart, product];
    setCart(newCart);
    console.log(cart);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
