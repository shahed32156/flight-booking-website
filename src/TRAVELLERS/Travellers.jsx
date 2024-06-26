import React from 'react';

const Travellers = () => {
  return (
    <>
      <div className='mt-20 md:mt-28 text-center mx-3'>
        <h1 className='text-3xl font-semibold font-[poppins]'>Top travelers of this month!</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-16 gap-6 lg:mx-40'>
        <div className='traveller  h-[300px] w-[220px] mx-auto'>
          <img className='traveller-image rounded-full' src="./Images/london.jpg" alt="" />
          <img className='traveller-icon h-[50px] w-[50px] rounded-full border-white border-4' src='./Images/aliz.jpg' alt="" />
          <h1 className='traveller-name bg-white pb-10 pt-2 text-[13px] font-bold w-[220px]'>Raknat Jahan Aliz</h1>
        </div>

        <div className='traveller  h-[300px] w-[220px] mx-auto'>
          <img className='traveller-image rounded-full' src="./Images/peru.jpg" alt="" />
          <img className='traveller-icon h-[50px] w-[50px] rounded-full border-white border-4' src='./Images/john.jpg' alt="" />
          <h1 className='traveller-name bg-white pb-10 pt-2 text-[13px] font-bold w-[220px]'>John Doe</h1>
        </div>

        <div className='traveller h-[300px] w-[220px] mx-auto'>
          <img className='traveller-image rounded-full' src="./Images/germany.jpg" alt="" />
          <img className='traveller-icon h-[50px] w-[50px] rounded-full border-white border-4' src='./Images/Joseph.jpg' alt="" />
          <h1 className='traveller-name bg-white pb-10 pt-2 text-[13px] font-bold w-[220px]'>Phill Joseph</h1>
        </div>

        <div className='traveller h-[300px] w-[220px] mx-auto'>
          <img className='traveller-image rounded-full' src="./Images/malaysia.png" alt="" />
          <img className='traveller-icon h-[50px] w-[50px] rounded-full border-white border-4' src='./Images/richard.webp' alt="" />
          <h1 className='traveller-name bg-white pb-10 pt-2 text-[13px] font-bold w-[220px]'>Richard Johnson</h1>
        </div>
      </div>
    </>
  );
};

export default Travellers;
