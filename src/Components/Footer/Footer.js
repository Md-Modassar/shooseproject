import React from 'react'
import "./footer.css"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from "../Assests/logo.png"
const Footer = () => {
  return (

    <div className='footer'>
         <div className='footer_up'>
           <img src={logo} alt=''/>
           <h1>SHOPPING</h1>
         </div>
         <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
         </ul>
      <div className='footer_down'>  
     <div className="social-icons">
      <a href="https://www.facebook.com/" target="" rel="">
        <FaFacebook className='icon'/>
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <FaTwitter className='icon' />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className='icon' />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className='icon' />
      </a>
    </div>
    <hr/>
    <p> 2023 Your Company Name. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer