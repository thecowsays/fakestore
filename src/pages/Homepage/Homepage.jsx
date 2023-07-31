import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Homepage.css'
import '../../components/ProductCard/ProductCard.css'

function Homepage() {
    // create state to show all products from a category
    const [categories, setCategories] = useState([])

    // create state to hold the products
    const [products, setProducts] = useState([])

    useEffect(
        () => {
            // make api call to get all products
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
                    // store it in state
                    setCategories(res.data)
                    // console.log(categories)
                })
                .catch(err => console.log(err))
        }, []
    )

    const handleShowAll = () => {
        // I need to show all products -- where do I need to get the data from?
        // make api call to get all products
        axios.get(`https://fakestoreapi.com/products`)
            .then(res => {
                // console.log(res.data)
                // I have the data -- what do I do with it?
                // store it in state
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    }

    const handleCategory = (category) => {
        console.log(category)
        // category end point -- what do we need to do with it?
        // https://fakestoreapi.com/products/category/jewelery
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => {
                console.log(res.data)
                // What should I do next? -- store in state 'products'
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="home-wrapper">
            <div className="categories">
                <button onClick={handleShowAll}>All</button>
                {/* I want to create a button for each category item */}
                {/* First, use the categories GET and map each item */}
                {
                    categories.map((item) => {
                        // console.log(item)
                        return <button onClick={
                            () => handleCategory(item)
                        } key={item} value={item}>{item}</button>
                    }
                    )
                }
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