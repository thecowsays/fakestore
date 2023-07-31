import React from 'react'

import '../../App.css'
import './Contact.css'

function Contact() {
  return (

    <div className="contact-wrapper">
      <h1>Contact Us</h1>
      <div className="form-wrapper">
      <form>
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
        <textarea placeholder="Write your message here." height="5"></textarea>
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>

  )
}

export default Contact