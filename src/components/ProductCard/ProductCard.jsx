import React from 'react'
import { Link } from 'react-router-dom'

import { AiFillHeart } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"

import './ProductCard.css'

function ProductCard({ product }) {

  // obj: click the empty icon and have it change to full
  // initialize as false aka empty icon by default
  const isInCart = false;

  return (
    <div className="card-item">
      <img src={product.image} />
      {
        isInCart ?
          <AiFillHeart className="heart heart-full" />
          :
          <AiOutlineHeart className="heart heart-empty" /> // do falsey first
      }

      {/* I want the card text to show the product details page when clicked */}
      {/* I need to create a "Link" and wrap all the text info */}
      <div className="card-info">
        {/* Where's the data? product.id */}
        {/* <h6>Product Number: {`${product.id}`}</h6> */}
        <Link to={`../details/${product.id}`}>
          <p className="bold">{product.title}</p>
        </Link>
        <p className="product-label">{product.category}</p>
        <p className="bold price-margin">{product.price}&euro;</p>
      </div>
    </div>
  )
}

export default ProductCard