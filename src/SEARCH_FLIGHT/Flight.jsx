import React from 'react'

import { TiLocationOutline } from "react-icons/ti";
import { GiHumanTarget } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Flight = () => {
  return (
    <>
    
      
    <div className='mx-auto'>

    <div className='mt-24 md:mt-28 mx-3  md:mx-24 flex flex-col border-2 border-[#dfdede] shadow-md rounded-xl py-8 md:py-16'>


<div className='flex flex-col justify-center items-center py-3 px-10 md:px-8  rounded-3xl md:flex-row gap-4 md:gap-16 bg-[#edebeb] text-[16px] font-semibold mx-auto'>

       <NavLink to="/book">Economy</NavLink> 
       <NavLink to="/book">Business Class</NavLink> 
       <NavLink to="/book">First Class</NavLink>

</div>



<div className='grid grid-cols-2 gap-6 md:gap-4 mx-3 lg:mx-44 md:grid-cols-4 lg:grid-cols-4 mt-10'>


<div className='flex gap-4 items-center md:justify-center'>
    
    <div>
        <TiLocationOutline className='h-[50px] w-[50px] bg-gray-200 py-3 px-1 rounded-full' />

    </div>

    <div>

        <h3 className='text-[16px] font-semibold'>Location</h3>
        <p className='text-[12px]'>Where do you want to</p>

    </div>

</div>


<div className='flex gap-4 items-center md:justify-center w-[150px] md:w-auto ml-auto md:ml-0'>

    <div>
        <GiHumanTarget className='h-[50px] w-[50px] bg-gray-200 py-3 px-1 rounded-full' />

    </div>

    <div>

        <h3 className='text-[16px] font-semibold'>Travelers</h3>
        <p className='text-[12px]'>Add Guests</p>

    </div>

</div>     


<div className='flex gap-4  items-center md:justify-center'>
    <div>
        <SlCalender className='h-[50px] w-[50px] bg-gray-200 py-3 px-1 rounded-full' />

    </div>

    <div>

        <h3 className='text-[16px] font-semibold'>Check In</h3>
        <p className='text-[12px]'>Add date</p>

    </div>

</div>

<div className='flex gap-4 items-center md:justify-center  w-[150px] md:w-auto ml-auto md:ml-0'> 

    <div>
        <SlCalender className='h-[50px] w-[50px] bg-gray-200 py-3 px-1 rounded-full' />

    </div>

    <div>

        <h3 className='text-[16px] font-semibold'>Check Out</h3>
        <p className='text-[12px]'>Add date</p>

    </div>

</div>

</div>


<div className='flex justify-center md:justify-end mt-8'>
<NavLink to="/book" className="bg-black flex items-center gap-1 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 md:hover:bg-[#4e4e4e] rounded">

<FaSearch className='text-white' />

<p>Search Flight</p>
 
</NavLink>
</div>

</div>

    </div>
    
    </>
  )
}

export default Flight
