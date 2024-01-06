import React from 'react'
import "./emailoffer.css"

const EmailOffer = () => {
  return (
    <div className='emailoffer'>
        <div className='emailoffer_left'>
          <h1>Get Exclusive Offer On Your Email</h1>
          <p>Subscribe to our newslatter update</p>
        </div>
        <div className='emailoffer_right'>
            <input type='email' placeholder='Enter Email'/>
            <button>Subscribe</button>
        </div>

    </div>
  )
}

export default EmailOffer