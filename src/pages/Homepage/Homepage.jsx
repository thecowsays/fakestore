import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Homepage.css'
import '../../components/ProductCard/ProductCard.css'

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

    const showCategory = () => {
        categories.map((item) => {
            // console.log(`${item} is working!`)
            console.log(`/${item}`)
        })
    }

    const handleCategory = () => {
        // console.log(categories.filter(item => item.category === ))
    }


    return (
        <div className="home-wrapper">
            <div className="categories">

                {/* I want to create a button for each category item */}
                {/* First, use the categories GET and map each item */}
                {
                    categories.map((item) => {
                        // console.log(item)
                        return <button onClick={handleCategory} key={item}>{item}</button>
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