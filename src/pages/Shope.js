import React from 'react'
import Hero from '../Components/Hero/Hero'
import Sho_Popular from '../Components/Sho_popular/Sho_Popular'
import Exlusivbanner from '../Components/Exlusive/Exlusivbanner'
import NewCollection from '../Components/NewCollection/NewCollection'
import EmailOffer from '../Components/Emailoffer/EmailOffer'


const Shope = () => {
  return (
    <div>
        <Hero/>
        <Sho_Popular/>
        <Exlusivbanner/>
        <NewCollection/>
        <EmailOffer/>
    </div>
  )
}

export default Shope