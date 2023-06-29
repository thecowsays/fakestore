import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Homepage.css'

function Homepage() {

    const [categories, setCategories] = useState([])
    // create state to hold the products
    const [products, setProducts] = useState([])

    useEffect(
        () => {
            // make api call to get products
            axios.get(`https://fakestoreapi.com/products`)
                .then(res => {
                    // console.log(res.data)
                    // I have the data -- what do I do with it?
                    // store it in state
                    setProducts(res.data)
                })
                .catch(err => console.log(err))

            // make api call to get categories
            axios.get(`https://fakestoreapi.com/products/categories`)
                .then(res => {
                    setCategories(res.data)
                })
                .catch(err => console.log(err))
        }, []
    )

    return (
        <div className="home-wrapper">
            <div className="categories">

            </div>
            <div className="product-container">
                {
                    // products.map(item => <p>{item.title}</p>)
                    products.map(item => <ProductCard key={item.id} product={item} />)
                }
            </div>
        </div>
    )
}

export default Homepage