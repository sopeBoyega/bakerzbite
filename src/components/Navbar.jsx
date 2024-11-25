import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='border-2 border-black w-full py-[20px] flex justify-between items-center bg-transparent fixed
    
    '>
    <img src={assets.facebookIcon} alt="" />
    </div>
  )
}

export default Navbar