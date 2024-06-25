import React from 'react'

import Data from './data.json'
import Support_data_set from './Support_data_set';

const Support = () => {


let items = [];


items = Data.map((item, index) => <Support_data_set key={index} serial={item.serial} title={item.title} desc={item.desc} />)


  return (
    <>
    
    <div className='mt-20 md:mt-28 text-center mx-3'>
        <h1 className='text-[16px] tracking-[10px] font-medium text-[rgb(122,121,121)] uppercase'>Travel support</h1>
    </div>

    <div className='mt-6 text-center mx-3'>
        <h1 className='text-3xl font-semibold font-[poppins]'>Plan your travel with confidence</h1>
    </div>

    <div className='mt-4 text-center mx-3'>
        <h1 className=' text-[rgb(122,121,121)]'>Find help with booking and travel plan. See what to expect along the journey!</h1>
    </div>
    

    <div className='mt-16 flex flex-col gap-6 lg:flex-row items-center justify-center md:justify-between mx-3 lg:mx-64  '>

    <div className='flex flex-col gap-6'>

        {items}

    </div>


    <div>

        <img className='mx-auto w-full md:h-[500px] md:w-[450px]' src="./Images/support.png" alt="" />
    </div>

    </div>

    </>
  )
}

export default Support
