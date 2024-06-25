import React from 'react'

const Support_data_set = (props) => {

    const {serial, title, desc} =props;

  return (
    <>
    
      <div className='flex flex-col gap-3'>

         <h1 className='text-white flex items-center justify-center text-[18px] bg-[black] rounded-2xl h-[30px] w-[50px] font-bold'>{serial}</h1>
         <h3 className='font-mono text-[18px] font-semibold'>{title}</h3>
         <p className='font-light md:w-[400px]'>{desc}</p>

      </div>
    
    </>
  )
}

export default Support_data_set
