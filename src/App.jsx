import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header.jsx'
import Homepage from './pages/Homepage/Homepage.jsx'
import Footer from './components/Footer/Footer.jsx'
import Contact from './pages/Contact/Contact.jsx'

import './App.css'
import './global.css'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route exact path="/Homepage" element={<Homepage />} />
                <Route exact path="/Contact" element={<Contact />} />
                {/* <Route exact path="/" element={< />} /> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App