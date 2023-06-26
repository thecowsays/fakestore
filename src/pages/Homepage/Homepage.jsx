import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCards from '../../components/ProductCards/ProductCards';
import './Homepage.css'

function Homepage() {

    const [categories, setCategories] = useState([])

    allProducts(
        () => {
            axios.get(`https://fakestoreapi.com/products`)
                .then(res => {
                    console.log(allProducts)
                })
                .catch(err => console.log(err))
        }, []
    )

    // Retrieve and display all categories for navbar
    useEffect(
        () => {
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
                {/* endpoint for ALL categories */}
                {/* https://fakestoreapi.com/products/categories */}
                <button>All</button>
                {categories.map(item => <button>{item}</button>)}
                

                {/* each category endpoint example */}
                {/* https://fakestoreapi.com/products/category/jewelery */}

            </div>
            <ProductCards />
        </div>
    )
}

export default Homepage