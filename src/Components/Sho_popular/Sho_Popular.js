import React from 'react'
import data_product from '../Assests/data'
import CartItem from '../CardItem/CartItem'
import "./sho_popular.css"
const Sho_Popular = () => {

  return (
    <div className='popular'>
         <h1>POPULAR WOMEN SHOOSE</h1>
         <hr/>
          <div className='popular-card'>
        {
            
              data_product.map((item,i)=>{
                return <CartItem item={item}/>
            })
            
           
            
        }
        </div>
        
    </div>
  )
}

export default Sho_Popular