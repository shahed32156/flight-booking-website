import React from 'react'
import { FaDownload } from 'react-icons/fa'


const Ticket = () => {

  return (
    <>
    
    <div className='mt-20'>
      <h1 className='text-center text-[16px] tracking-[10px] font-medium text-[rgb(122,121,121)] uppercase'>Ticket</h1>
      
      <h3 className='text-center font-medium text-[15px] mt-5'>Olisphis to Weling</h3>
      
      <div className='mt-10 mx-3 overflow-x-auto'>
        <table className='w-full border-collapse border border-gray-400'>
          <thead>
            <tr>
              <th className='border border-gray-300 p-2'>Depart</th>
              <th className='border border-gray-300 p-2'>Return</th>
              <th className='border border-gray-300 p-2'>Class</th>
              <th className='border border-gray-300 p-2'>Passenger</th>

            </tr>
          </thead>
          <tbody>
          
              <tr className='text-center'>

                <td className='border border-gray-300 p-2'>2024-08-2022</td>
                <td className='border border-gray-300 p-2'>2024-08-2022</td>
                <td className='border border-gray-300 p-2'>Economy</td>
                <td className='border border-gray-300 p-2'>2</td>
              

              </tr>
            
          </tbody>
        </table>
      </div>
    </div>
    
    <div class="mt-8 flex items-center justify-center">

        <a href="./Images/ticket.png" download="Ticket" target="_blank"><button className="bg-black flex gap-2  items-center justify-center text-white font-[Poppins] duration-500 px-6 py-2 mx-4 md:hover:bg-[#4e4e4e] rounded">
            
            <FaDownload className='text-white ' />
            <p>Download Ticket</p>
            
            </button>
            
            </a>
    
    </div>
    </>
  )
}

export default Ticket
