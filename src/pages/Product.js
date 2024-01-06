import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/Context'
import { useParams } from 'react-router-dom'
import DisplayProduct from '../Components/DisplayProduct/DisplayProduct'

const Product = () => {
    const {all_product}=useContext(ShopContext)
    const {productId}=useParams();
   
    const prdt=all_product.find((e)=>e.id===Number(productId))
    
  return (
    <div>
      {
       <DisplayProduct product={prdt}/>
      }    
    
    </div>
  )
}

export default Product