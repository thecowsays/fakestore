import { useState, createContext, useEffect } from "react";

// create context
export const CartContext = createContext();

export default function CartContextProvider(props) {
  // create the global state
  const [cartContents, setCartContents] = useState([]);

  // Local storage code

  // useEffect(
  //     () => {
  //         // check when page loads
  //         const storedDarkMode = localStorage.getItem('darkMode')
  //         // if there was a stored value
  //         if (storedDarkMode) {
  //             setDarkMode(JSON.parse(storedDarkMode))
  //         }
  //     }, []
  // )

  // useEffect(
  //     () => {
  //         // Save current state to localStorage
  //         localStorage.setItem('darkMode', JSON.stringify(darkMode))
  //     }, [darkMode] // runs when darkMode is changed
  // )

  const addToCart = (itemToAdd) => {
    // console.log(`adding ${itemToAdd}`);
    // add this object to cart
    let newCartContents = [...cartContents, itemToAdd];
    // console.log(newCartContents);
    setCartContents(newCartContents);
  };

  return (
    <CartContext.Provider value={{ cartContents, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
}
