import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import '../../global.css'
import './Homepage.css'

function Homepage() {

    const [categories, setCategories] = useState([])

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
                {
                    categories.map(item => <button>{item}</button>)
                }
                {/* get array of categories */}
                {/* loop through array displaying each item as a button */}

                {/* each category endpoint example */}
                {/* https://fakestoreapi.com/products/category/jewelery */}


            </div>
        </div>
    )
}

export default Homepage