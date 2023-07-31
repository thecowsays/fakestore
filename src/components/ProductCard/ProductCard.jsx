import React from 'react'
import { AiFillHeart } from "react-icons/ai";

import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <div className="card-item">
      <img src={product.image} />
      <AiFillHeart className="heart" />
      <div className="card-info">
        <p className="bold">{product.title}</p>
        <p className="product-label">{product.category}</p>
        <p className="bold price-margin">{product.price}&euro;</p>
      </div>
    </div>
  )
}

export default ProductCard