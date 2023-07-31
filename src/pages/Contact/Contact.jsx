import React from 'react'

import '../../App.css'
import './Contact.css'

function Contact() {
  return (

    <div className="contact-wrapper">
      <h1>Contact Us</h1>
      <div className="form-wrapper">
      <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <textarea placeholder="Write your message here." />
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>

  )
}

export default Contact