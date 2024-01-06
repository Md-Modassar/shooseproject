import React from 'react'
import "./exlusive.css"
import bannerbegs from '../Assests/bannerbegs.png'
const Exlusivbanner = () => {
  return (
    <div className='exclusive'>
        <div className='exclusive-left'>
            <h1>Exclusive</h1>
            <h1>Offer for You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p> 
            <button>CHECK NOW</button>    
        </div>
        <div className='exclusive-right'>
            <img src={bannerbegs} alt=''/>
            
        </div>
    </div>
  )
}

export default Exlusivbanner