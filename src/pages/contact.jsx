import React from 'react'

const Contact = () => {
  return (
<div className="w-full h-[1164px] flex items-center justify-center">
  <div className="bg-[#F9F9FB] w-fit h-fit flex flex-col items-center justify-center p-[75px]">
<div className=" h-fit lg:w-[836px]">
  <p className='font-medium text-[34px] large-[54px] text-[#933C24]'>Leave Us Your Info</p>
  <div className="h-fit lg:w-[836px] flex flex-col gap-5 items-start ">
  <input
  type='text'
   className=" h-fit px-[30px] py-[16px] lg:w-[836px] rounded-[15px] border-[1.5px] border-[#D6D6D6]" 
  placeholder='Your Name'/>
  <input
  type='text'
   className=" h-fit px-[30px] py-[16px] lg:w-[836px] rounded-[15px] border-[1.5px] border-[#D6D6D6]" 
  placeholder='Your Email'/>
  <input
  type='text'
   className=" h-[216px] px-[30px] text-start lg:w-[836px] rounded-[15px] border-[1.5px] border-[#D6D6D6]" 
  placeholder='Comment'/>
  <div className="flex flex-row">
  <input type="checkbox" name="Privacy Policy" id="" />
  <p className='lg:text-[21px] ml-2  text-[#808080]'>You agree to our friendly<span className='lg:text-[21px] ml-2 font-semibold  text-[#4A1D1f]'>privacy policy</span></p>
  </div>
  </div>
  <div className="w-fit h-fit px-[24px] py-[15px] rounded-[12px] bg-[#FBEDCD]">
    <p className='font-semibold text-[24px] w-fit h-fit text-[#4A1D1F]'> Send Message   →</p>
  </div>
</div>
  </div>
</div>
  )
}

export default Contact