import React from 'react'
import { SlBasket } from "react-icons/sl";
import './Header.css'
import './global.css'

function Header() {
    return (
        <header>
            <div class="logo"><a href="">Fakestore</a></div>
            <div>
                <SlBasket size={35} fill={"#3A4895"} /> {/* cart icon */}
                {/* Shows red badge on cart */}
                {/* WIP - create prop for cart count */}
                <div className="notification-badge">0</div>
            </div>
        </header>
    )
}

export default Header