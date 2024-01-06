import React from 'react'
import { ShopContext } from '../Context/Context'
//import all_product from '../Components/Assests/all_product'
import CartItem from '../Components/CardItem/CartItem'
import { useContext } from 'react'
import dropdown_icon from "../Components/Assests/dropdown_icon.png"
import "./shopecategory.css"

const ShopeCattegory = (props) => {
  const {all_product} =useContext(ShopContext)
  
  return (
    <div className='category'>
            <img src={props.banner} alt='' className='ban'/>
        <div className='category-indexShort'>
         <p>
           <span>Showing 1-12</span> out of 36 products
         </p>
        <div className='category-sort'>
          Sort by <img src={dropdown_icon} alt=''/>
        </div>
       </div>
        <div className='category-right'>
            {
              all_product.map((item,i)=>{
                if(props.category===item.category){
                  return <CartItem item={item}/>
                }
                
              })
            }
        </div>
    </div>
  )
}

export default ShopeCattegory