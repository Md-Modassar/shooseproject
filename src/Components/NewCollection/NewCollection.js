import React from 'react'
import "./newcollection.css"
import new_collections from "../Assests/new_collections"
import CartItem from '../CardItem/CartItem'
const NewCollection = () => {
  return (
    <div className='newcollection'>
        <h1>NEW COLLECTION</h1>
         <hr/>
        <div className='newcollection_card'>
            {
              new_collections.map((item,i)=>{
                return <CartItem item={item}/>
              })
            }

        </div>

    </div>
  )
}

export default NewCollection