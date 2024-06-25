import React from 'react'

const About = () => {
  return (

    <>


    <div className='mt-20 md:mt-28 text-center mx-3'>
        <h1 className='text-[16px] tracking-[10px] font-medium text-[rgb(122,121,121)] uppercase'>About our agency</h1>
    </div>


    <div className='flex flex-col gap-6 md:flex-col lg:flex-row mx-3 md:mx-52 justify-between items-center mt-10'>
        
           <div className='flex flex-col gap-3 justify-center mx-3'>

              
              <h1 className='w-full md:w-[600px] text-xl md:text-4xl font-bold font-mono'>Your Gateway to the World!</h1> 
              <p className='w-full md:w-[550px] text-justify'>Our agency offers seamless and affordable flight bookings to destinations worldwide. Our user-friendly platform ensures quick and easy reservations, with 24/7 customer support for a stress-free experience. Enjoy exclusive deals, flexible booking options, and personalized travel recommendations. Trust SkyVoyage for your next adventure, and let us handle the details while you explore the world. Fly smarter, travel happier with us.</p>
            
           </div>

           <div className=''>

           <img className='mx-auto w-full md:h-[500px] md:w-[450px]' src="./Images/about.png" alt="" />   
          
          </div>
   

    </div>

  </>

  )
}

export default About
