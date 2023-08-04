import React from 'react'
import { AiFillHeart } from "react-icons/ai"
import { Link } from 'react-router-dom'

import './ProductCard.css'

function ProductCard({ product }) {

  return (
    <div className="card-item">
      <img src={product.image} />
      <AiFillHeart className="heart" />

      {/* I want the card text to show the product details page when clicked */}
      {/* I need to create a "Link" and wrap all the text info */}
      <div className="card-info">
        <Link to={`/Details/${productId}`}>
        <p className="bold">{product.title}</p>
        <p className="product-label">{product.category}</p>
        <p className="bold price-margin">{product.price}&euro;</p>
        </Link>
      </div>
    </div>
  )
}

export default ProductCard