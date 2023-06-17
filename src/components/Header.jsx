import React from 'react'
import { SlBasket } from "react-icons/sl";
import './Header.css'


function Header() {
    return (
        <header>
            <div>Fakestore</div>
            <div>
                <SlBasket />
                <div className="notification-badge">0</div>
            </div>
        </header>
    )
}

export default Header