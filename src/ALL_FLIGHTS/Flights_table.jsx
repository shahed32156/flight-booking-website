import React from 'react'

import { NavLink, useLocation } from 'react-router-dom';
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const Flights_table = () => {
    
  const location = useLocation();
  const { from, to, depart, rtn, cls, count } = location.state ;

  return (
    <>
    
    <div className='mt-20'>
      <h1 className='text-center text-[16px] tracking-[10px] font-medium text-[rgb(122,121,121)] uppercase'>Flights Status</h1>
      
      <h3 className='text-center font-medium text-[15px] mt-5'>{from} to {to}</h3>
      
      <div className='mt-10 mx-3 overflow-x-auto'>
        <table className='w-full border-collapse border border-gray-400'>
          <thead>
            <tr>
              <th className='border border-gray-300 p-2'>Depart</th>
              <th className='border border-gray-300 p-2'>Return</th>
              <th className='border border-gray-300 p-2'>Class</th>
              <th className='border border-gray-300 p-2'>Passengers</th>
              <th className='border border-gray-300 p-2'>Fare</th>
              <th className='border border-gray-300 p-2'>Book</th>

            </tr>
          </thead>
          <tbody>
          
              <tr className='text-center'>
                <td className='border border-gray-300 p-2'>{depart}</td>
                <td className='border border-gray-300 p-2'>{rtn}</td>
                <td className='border border-gray-300 p-2'>{cls}</td>
                <td className='border border-gray-300 p-2'>{count}</td>
                <td className='border border-gray-300 p-2'>$380</td>
                <td className='border border-gray-300 p-2'> 
                
                <div className='flex items-center gap-4 justify-center'>

                <NavLink to="/passenger" className="flex justify-center items-center">
                <TiTick className='bg-green-500 text-white text-[20px]' /> 
                 
                </NavLink> 
                 
                <NavLink to="/home" className="flex justify-center items-center">
                <RxCross2 className='bg-[red] text-white text-[20px] font-bold' /> 
                 
                </NavLink>  
                  
                </div>  
                
                </td>

              </tr>
            
          </tbody>
        </table>
      </div>
    </div>
    
    </>
  )
}

export default Flights_table
