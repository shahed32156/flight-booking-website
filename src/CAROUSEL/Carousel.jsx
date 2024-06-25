import React from 'react'

import { Link } from 'react-scroll';


const Carousel = () => {
  return (
    <>
    
     <div className='relative mt-36 md:mt-44 mx-3'>
        
          <h1 className='text-center text-2xl font-mono font-semibold md:text-4xl'>Enjoy your travel with safe journey!</h1>
        
        <img className='mt-10 md:mt-16 h-[150px] w-full md:h-[400px] md:w-[900px] rounded-[10rem] mx-auto' src="./Images/cloud.png" alt="" />
        <img className='h-[100px] w-[250px] md:h-[250px] md:w-[600px] rounded-[10rem] absolute top-20 lg:top-24 left-0 lg:left-[280px]' src="./Images/plane.png" alt="" />
     </div>
    
    </>
  )
}

export default Carousel
