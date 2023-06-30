import React from 'react'
import './ProductCard.css'
import { AiFillHeart } from "react-icons/ai";

function ProductCard({ product }) {
  return (
    <div className="card-container">
      <div className="card">
      <img src={product.image} />
      <AiFillHeart className="heart" />
      <div>
        <p className="bold">{product.title}</p>
        <p className="label">{product.category}</p>
        <br />
        <p className="bold">{product.price}&euro;</p>
      </div>
      </div>
    </div>
  )
}

export default ProductCard