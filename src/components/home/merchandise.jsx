import React from 'react'
import { merchItems } from '../../assets/assets'

const Merchandise = () => {
  return (
    // Fix Webkit Scrollbar
    <div className="flex flex-col p-10 bg-[#FBEDCD] overflow-x-scroll w-full h-[440px] md:overflow-x-hidden ">
         <p className="font-bold  text-[32px] mb-[10px] text-bakerzBiteDarkBrown md:mr-[80px] lg:text-[40px]">
           Our Merchandise
          </p>
          <div className="flex flex-row justify-between gap-4 w-full ">
          {merchItems.map((item,key) => (
               <div className='flex flex-col border-[0.5px] border-bakerzBiteDarkBrown p-[15px]' >
                   <img src={item.image} alt="" className='rounded-lg' />
                   <div className="flex flex-row items-center  justify-between w-full ">
              <p>{item.name}</p>
              <p className="text-black text-[16px] font-bold ">
                ${item.price.toFixed(1)} 
              </p>
            </div>
               </div>
           
                
          ))}
          </div>
    </div>
  )
}

export default Merchandise