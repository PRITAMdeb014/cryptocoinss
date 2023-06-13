import React from 'react'
import "./Body.css"
import HotSale from "../Frame172.png"
import Estate from "../ESTATE.png"
import CryptoContent from "../Frame9.png"
const Body = () => {
  return (
    <div>
        <br/>
        <div className='estatediv'><img src={Estate} className='estateimg'/></div>
        <div  className='cryptodiv'> <img src={CryptoContent} className='cryptoimg'/></div>
       <div className='Hotsalediv'><img src={HotSale} className='Hotsale'/></div>
    </div>
  )
}

export default Body