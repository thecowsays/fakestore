import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header.jsx'
import Homepage from './pages/Homepage/Homepage.jsx'
import Footer from './components/Footer/Footer.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Details from './pages/Details/Details.jsx'

import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route exact path="/homepage" element={<Homepage />} />
                <Route exact path="/contact" element={<Contact />} />
                {/* useParams, passes productId to Details.jsx */}
                <Route exact path="/details/:productId" element={<Details />} />
                {/* <Route exact path="/" element={< />} /> */}
                {/* <Route exact path="/" element={< />} /> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App