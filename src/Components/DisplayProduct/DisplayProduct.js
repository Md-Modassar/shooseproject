import React from 'react'
import start_icon from "../Assests/star_icon.png"
import star_dull_icon from "../Assests/star_dull_icon.png"
import "./displayproduct.css"
import Discription from '../Discription/Discription'

const DisplayProduct = (props) => {
     const {image,name ,new_price,old_price}=props.product
  return (
   <>
    <div className='diplayproduct'>
        <div className='displayproduct-left'>
             <div className='display-sub-image'>
                <img src={image} alt=''/>
                <img src={image} alt=''/>
                <img src={image} alt=''/>
                <img src={image} alt=''/>
             </div>
             <div className='display-image'>
               <img src={image} alt=''/>
             </div>
        </div>
     <div className='display-right'>
        <h1>{name}</h1>
         <div className='display-start'>
            <img src={start_icon} alt=''/>
            <img src={start_icon} alt=''/>
            <img src={start_icon} alt=''/>
            <img src={start_icon} alt=''/>
            <img src={start_icon} alt=''/>
            <img src={star_dull_icon} alt=''/>
            <p>(122)</p>
         </div>
         <div className='display-price'>
            <div className='display-old_price'>
             ₹ {old_price}
            </div>
            <div className='display-new_price'>
              ₹ {new_price}
            </div>
         </div>
         <div className='display-description'>
            A lightweight,usually knitted, pullover shirt,close-fitting and 
            a round neckline and short sleeves,worn as an undershirt or outer
            garmet.
          </div>
         <div className='display-size'>
            <h1>Select Size</h1>
         </div>
         <div className='display-size-type'>
             <div>6</div>
             <div>8</div>
             <div>10</div>
             <div>12</div>

         </div>
         <button>Add To Cart</button>
     </div>

    </div>
    <Discription/>
    </>
  )
}

export default DisplayProduct