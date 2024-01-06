import React from 'react'
import "./navbar.css"
import logo from "../Assests/logo.png"
import carticon from "../Assests/cart_icon.png"
import { FaBars as FsBars } from 'react-icons/fa';
import {ImCross} from "react-icons/im"
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [mobile,setMobile]=useState(false)
  return (
    <div className='nav'>
        <div className='logo'>
            <img src={logo} alt=''/>
            <h1>ShOPPER</h1>
        </div>
        <lu className={mobile?"mobile-menu":"menu"} onClick={()=>setMobile(false)}>
          <Link to="/" style={{textDecoration:'none'}}><li>Shop</li></Link>
          <Link to="/men" style={{textDecoration:'none'}}><li>Men</li></Link>
          <Link to="/women" style={{textDecoration:'none'}}><li>Women</li></Link>
         <Link to="/kids" style={{textDecoration:'none'}}><li>Kid</li></Link> 
        </lu>
        <button className='mobile-menu-icons' onClick={()=>setMobile(!mobile)} >
            {mobile?<ImCross/>:<FsBars/>}
        </button>
        <div className='login'>
            <button>Login</button>
            <img src={carticon} alt=''/>
        </div>
        
    </div>
  )
}

export default Navbar