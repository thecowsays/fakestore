// import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import '../../App.css'
import './Details.css'

function Details() {

  // Grab the URL param named in App.jsx
  // const { productId } = useParams();

  // What do I want to happen?
  // I want the details for a product to show
  // What do I do first?
  // Get the data, make an API call
  const [product, setProduct] = useState('')
  // useParams to grab id from URL in order to place API call
  const { productId } = useParams()


  useEffect(
    () => {
      axios.get(`https://fakestoreapi.com/products/${productId}`)

        .then(res => {
          setProduct(res?.data)
          console.log(product)
        })
        .catch(err => console.log(err))
    }, []
  )


  return (
    <div className="details-wrapper">
      <img src={product.image} />
      <div className="product-info">
        <p className="bold">{product.title}</p>
        <p>{product.price}&euro;</p>
        <p className="bold">Description</p>
        <p>{product.description}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default Details