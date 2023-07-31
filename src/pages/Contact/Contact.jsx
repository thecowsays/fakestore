import React from 'react'
import './Contact.css'
// import '../../global.css'

function Contact() {
  return (

    <div>
      <h1>Contact Us</h1>
      <div className='form-wrapper'>
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