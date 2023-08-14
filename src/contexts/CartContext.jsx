import { useState, createContext, useEffect } from "react";

// create context
export const CartContext = createContext();

export default function CartContextProvider(props) {
  // create the global state
  const [cartContents, setCartContents] = useState([]);

  // Local storage code

  useEffect(() => {
    // check when page loads
    const savedCart = localStorage.getItem("cartContents");
    // if there was a stored value
    if (savedCart) {
      setCartContents(JSON.parse(savedCart));
    }
  }, []);

  useEffect(
    () => {
      // Save current state to localStorage
      localStorage.setItem("cartContents", JSON.stringify(cartContents));
    },
    [cartContents] // runs when darkMode is changed
  );

  const addToCart = (itemToAdd) => {
    // console.log(`adding ${itemToAdd}`);
    // add this object to cart
    let newCartContents = [...cartContents, itemToAdd];
    // console.log(newCartContents);
    setCartContents(newCartContents);
  };

  const removeFromCart = (itemId) => {
    console.log(`removing ${itemId}`);
    // remove from cart
    let newCartContents = cartContents.filter((item) => item.id != itemId);
    setCartContents(newCartContents);
  };

  return (
    <CartContext.Provider value={{ cartContents, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
}
