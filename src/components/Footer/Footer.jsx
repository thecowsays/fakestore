import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div>Made with ❤️ by salali x mimo</div>
            <Link to="/Contact">Contact Us</Link>
        </footer>
    )
}

export default Footer