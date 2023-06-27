import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Homepage.css'

function Homepage() {

    const [categories, setCategories] = useState([])
    // create state to hold the products
    const [products, setProducts] = useState([])

    // saving for later
    // allProducts(
    //     () => {

    //     }, []
    // )

    // Retrieve and display all categories for navbar
    useEffect(
        () => {
            // make api call to get products
            axios.get(`https://fakestoreapi.com/products`)
                .then(res => {
                    console.log(res.data)
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

    // const categoryName = () => {
    //     categoryName.map((categories.map, i) => {

    //     }
    //     )
    // }

    return (
        <div className="home-wrapper">
            <div className="categories">
                {/* endpoint for ALL categories */}
                {/* https://fakestoreapi.com/products/categories */}
                {/* <button>All</button>
                {categories.map(item => <button onClick={ } key={item}>{item}</button>)} */}


                {/* each category endpoint example */}
                {/* https://fakestoreapi.com/products/category/jewelery */}

            </div>
            <div className="product-container">
                {
                    // products.map(item => <p>{item.title}</p>)
                    products.map(item => <ProductCard product={item} />)
                }
            </div>
        </div>
    )
}

export default Homepage