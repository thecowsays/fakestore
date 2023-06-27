import React from 'react'
import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <div className="card-container">
      <img src={product.image}></img>
      <p>{product.title}
      </p>

    </div>
  )
}

export default ProductCard