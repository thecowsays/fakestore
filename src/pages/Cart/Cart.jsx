import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import ProductCard from "../../components/ProductCard/ProductCard";

import "../../App.css";
import "./Cart.css";

function Cart() {
  const { cartContents } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="items-container">
        {cartContents.length > 0 ? (
          cartContents.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))
        ) : (
          <p style={{ textAlign: "center", margin: "2em, 0" }}>
            You haven't added anything to your cart yet.
          </p>
        )}
      </div>
    </div>
  );
}

export default Cart;
