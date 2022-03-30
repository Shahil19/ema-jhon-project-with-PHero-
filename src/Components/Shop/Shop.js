import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  // ! module 48-7
  // use state for order summary
  const [cart, setCart] = useState([]);

  //! useEffect is used when we load(fetch) data from outside
  useEffect(() => {
    // console.log("started - products", products);
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(" End - Products ");
        setProducts(data);
      });
  }, []);

  // load Data from local storage
  useEffect(() => {
    // console.log("Started - localStorage");
    const storedCart = getStoredCart();
    // console.log(storedCart);

    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);

      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }

      setCart(savedCart);
      console.log(savedCart);
    }
    // console.log("finished - localStorage");
  }, [products]);

  // ?----------- sent event handler as attribute and get as object value (props)
  const handleAddToCart = (product) => {
    // ?------------- newCart = cart + product (...cart = only cart property)
    const newCart = [...cart, product];
    setCart(newCart);

    // from local storage
    addToDb(product.id);
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
