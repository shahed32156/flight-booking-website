import React, { useState } from 'react'


import { GoChecklist } from "react-icons/go";


const Memories = () => {

const [data, setData] =useState(false);

  return (
    <>
    
      <div className='bg-[#e6e3e3] py-24 mt-24'>

      <div className='flex items-center justify-between mx-3 md:mx-10'>

<h1 className='text-2xl w-[200px] md:w-[300px] font-[poppins] font-semibold'>Travel to make memories all around the world</h1>
<button onClick={() => setData(!data)} className="bg-black text-white font-[Poppins] duration-500 px-6 py-2 mx-4 md:hover:bg-[#4e4e4e] rounded">
     {
      data ? "View Less" : "View All"
     }
 </button>
</div>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-6 mx-3 lg:mx-10'>

   <div className='bg-[#f5f5f5] h-[300px] w-[300px] px-6 pt-14 flex flex-col items-center gap-4 lg:mx-24 mx-auto rounded-full '>

              <div className='bg-blue-400 h-[50px] w-[50px] rounded-full flex justify-center items-center'>
                <i className="fa-regular fa-calendar-days text-[20px] text-white"></i>
              </div>
             
             <h3 className='text-xl font-extrabold'>Book & Relax</h3>

             <p className='text-center'>You can also call airlines from your phone and book a flight tickets</p>

   </div>


   <div className='bg-[#f5f5f5] h-[300px] w-[300px] px-6 pt-14 flex flex-col items-center gap-4 lg:mx-24 mx-auto rounded-full'>

             <div className='bg-yellow-500 h-[50px] w-[50px] rounded-full flex justify-center items-center'>
         
             <GoChecklist className='text-[22px] font-bold text-white' />

             </div>

             <h3 className='text-xl font-extrabold'>Smart Checklist</h3>

             <p className='text-center'>You can also call airlines from your phone and book a flight tickets</p>

 </div>

 <div className='bg-[#f5f5f5] h-[300px] w-[300px] px-6 pt-14 flex flex-col items-center gap-4 lg:mx-24 mx-auto rounded-full'>

             <div className='bg-green-500 h-[50px] w-[50px] rounded-full flex justify-center items-center'>
             <i class="fa-sharp fa-solid fa-bookmark text-[20px] text-white"></i>
             </div>

             <h3 className='text-xl font-extrabold'>Save More</h3>

             <p className='text-center'>You can also call airlines from your phone and book a flight tickets</p>

 </div>



</div>



{
  
  data && <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-6 mx-3 lg:mx-10'>
    
    
      <div className='bg-[#f5f5f5] h-[300px] w-[300px] px-6 pt-14 flex flex-col items-center gap-4 lg:mx-24 mx-auto  rounded-full'>

              <div className='bg-blue-400 h-[50px] w-[50px] rounded-full flex justify-center items-center'>
                <i className="fa-regular fa-calendar-days text-[20px] text-white"></i>
              </div>
             
             <h3 className='text-xl font-extrabold'>Book & Relax</h3>

             <p className='text-center'>You can also call airlines from your phone and book a flight tickets</p>

   </div>


   <div className='bg-[#f5f5f5] h-[300px] w-[300px] px-6 pt-14 flex flex-col items-center gap-4 lg:mx-24 mx-auto rounded-full'>

             <div className='bg-yellow-500 h-[50px] w-[50px] rounded-full flex justify-center items-center'>
         
             <GoChecklist className='text-[22px] font-bold text-white' />

             </div>

             <h3 className='text-xl font-extrabold'>Smart Checklist</h3>

             <p className='text-center'>You can also call airlines from your phone and book a flight tickets</p>

 </div>

 <div className='bg-[#f5f5f5] h-[300px] w-[300px] px-6 pt-14 flex flex-col items-center gap-4 lg:mx-24 mx-auto rounded-full'>

             <div className='bg-green-500 h-[50px] w-[50px] rounded-full flex justify-center items-center'>
             <i class="fa-sharp fa-solid fa-bookmark text-[20px] text-white"></i>
             </div>

             <h3 className='text-xl font-extrabold'>Save More</h3>

             <p className='text-center'>You can also call airlines from your phone and book a flight tickets</p>

 </div>
    
    
     </div>

}

      </div>
    
    
    </>
  )
}

export default Memories
