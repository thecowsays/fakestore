import React, { useEffect } from 'react'
import axios from 'axios';
// import '../../global.css'
import './Homepage.css'

function Homepage() {
    useEffect(
        () => {
            console.log("it works");
            axios.get(`https://fakestoreapi.com/products/categories`)
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => console.log(err))
        }, []
    )
    return (
        <div className="home-wrapper">
            <div className="categories">
                {/* endpoint for ALL categories */}
                {/* https://fakestoreapi.com/products/categories */}
                <li>All</li>
                {/* each category endpoint example */}
                {/* https://fakestoreapi.com/products/category/jewelery */}


            </div>
        </div>
    )
}

export default Homepage