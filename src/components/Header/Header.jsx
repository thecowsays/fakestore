import React from 'react'
import { SlBasket } from 'react-icons/sl'
import { Link } from 'react-router-dom'

import '../../App.css'
import './Header.css'

function Header() {
    return (
        <header>
            <div className="logo">
                <Link to="/">Fakestore</ Link>
            </div>
            <div>
                <Link to="/cart">
                    <SlBasket size={35} fill={"var(--primary-color)"} /> {/* cart icon */}
                    {/* Shows red badge on cart */}
                    {/* WIP - create prop for cart count */}
                    <div className="notification-badge">0</div>
                </Link>
            </div>
        </header>
    )
}

export default Header