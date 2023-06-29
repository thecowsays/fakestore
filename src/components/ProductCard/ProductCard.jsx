import React from 'react'
import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <div className="card-container">
      <img src={product.image} />
      <div>
        <p className="bold">{product.title}</p>
        <p className="label">{product.category}</p>
        <br />
        <p className="bold">{product.price}&euro;</p>
      </div>
    </div>
  )
}

export default ProductCard