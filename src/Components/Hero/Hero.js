import React from 'react'
import "./hero.css"
import heroimage from "../Assests/bg1.webp"
import arrowicon from "../Assests/arrow.png"
import handicon from "../Assests/hand_icon.png"
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW FOOTS WEARS ONLY</h2>
            <div className='new'>
                <div className='head-icon'>
                <p>New</p>
                <img src={handicon} alt=''/>
                </div>
                
                <p>Collection</p>
                <p>For <span>EveryOne</span></p>
            </div>
            <div className='hero-latest-btn'>
              <div>Latest Collection</div>
              <img src={arrowicon} alt=''/>
            </div>

        </div>
        <div className='hero-right'>
            <img src={heroimage} alt=''/>
        </div>
    </div>
  )
}

export default Hero