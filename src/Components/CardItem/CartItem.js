import React from 'react'
import "./CartItem.css"
import { Link } from 'react-router-dom'

const CartItem = (props) => {
     const {image,name,new_price,old_price} =props.item
     
  return (
    <div className='cart_menu'>
       <div className='card'>
         <Link to={`/product/${props.item.id}`}> <img onClick={window.scrollTo(0,0)} src={image} alt=''/></Link>

       </div>
       <h2>{name}</h2>
       <div className='price'>
        <p >₹{new_price}</p>
        <p className='old'>₹{old_price}</p>
       </div>
       <button>AddToCart</button>
       
    </div>
  )
}

export default CartItem