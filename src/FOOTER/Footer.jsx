
import React from 'react'

import Data from './data.json'
import Footer_set_data from './Footer_set_data';
import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { GrLocation, GrMailOption } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {

  let items = [];

items = Data.map((item, index) => <Footer_set_data key={index} title={item.title} 

num1={item.num1} num2={item.num2} num3={item.num3} num4={item.num4} num5={item.num5} num6={item.num6} /> )
    

  return (

    <div className=' bg-[#e6e3e3] py-10 mt-20 text-[gray] px-8 md:px-20'>

              <div className='flex items-center text-justify flex-col gap-3'>
                    
                    <div className='flex flex-col md:flex-row gap-2 items-center'>
                    <img className='h-[100px] w-[150px] mx-auto' src="./Images/logo.png" alt="" />
                    
                    </div>
                    <h2 className='md:text-[18px] text-black font-semibold font-[poppins] text-center'>Your mind should be stronger than your feelings, fly!</h2>
              </div>

                 <div className='mt-6 flex justify-center mx-auto gap-3'>

                  
                    
                    <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300'><FaFacebook className='text-[25px]' /></a>
                    
                    
                    <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300'><RiWhatsappFill className='text-[25px]' /></a>
                    
                    
                    <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300'><FaTwitter className='text-[25px]' /></a>
                    
                    
                    <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300'><FaYoutube className='text-[25px]' /></a>
                    
                
                </div>


         <div className='mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mt-20'>


                 {items}

              

                 

          </div>

          <div className='mt-16 text-center font-semibold'>
          <p className='border-t-[2px] font-[Infographic] border-t-black pt-4'>Copyright © 2024 Abullah Shahed. All rights reserved</p>  
          </div>      

    </div>
  )
}

export default Footer
