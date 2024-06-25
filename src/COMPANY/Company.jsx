import React from 'react'

const Company = () => {
  return (
    <>
    
    <div className='mt-20 flex flex-col lg:flex-row  gap-6 justify-between  mx-3 lg:mx-56'>

        <div className='flex flex-col gap-6'>

                <div className='mt-20 text-center lg:text-start'>
                <h1 className='text-3xl font-semibold font-[poppins]'>Unaccompanied Minor Lounge</h1>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-14 mx-auto'>

                        <div className='flex flex-col gap-2'>
                        
                        <h3 className='font-semibold text-[18px]'>Help through the airport</h3>
                        <p className='text-[15px] w-[250px] text-[#434343]'>You can also call airlines from your phone and book a flight ticket to
                        one of your favorite destinations.</p> 
                        </div>

                        <div className='flex flex-col gap-2'>
                        
                        <h3 className='font-semibold text-[18px]'>Priority Boarding</h3>
                        <p className='text-[15px] w-[250px] text-[#434343]'>You can also call airlines from your phone and book a flight ticket to
                        one of your favorite destinations.</p> 
                        </div>


                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-14 mx-auto'>

                        <div className='flex flex-col gap-2'>

                        <h3 className='font-semibold text-[18px]'>Care on the flight</h3>
                        <p className='text-[15px] w-[250px] text-[#434343]'>You can also call airlines from your phone and book a flight ticket to
                        one of your favorite destinations.</p> 
                        </div>

                        <div className='flex flex-col gap-2'>

                        <h3 className='font-semibold text-[18px]'>Chauffeur-drive service</h3>
                        <p className='text-[15px] w-[250px] text-[#434343]'>You can also call airlines from your phone and book a flight ticket to
                        one of your favorite destinations.</p> 
                        </div>


                    </div> 


        </div>


                <div>

                        <img className='mx-auto  md:h-[400px] md:w-[350px]' src="./Images/unaccompany.png" alt="" />
                
                </div> 

        </div>
    
    </>
  )
}

export default Company
