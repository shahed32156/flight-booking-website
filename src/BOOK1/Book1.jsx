import React, { useState } from 'react'

import Swal from'sweetalert2';
import { NavLink, useNavigate } from 'react-router-dom';
import { GrPowerReset } from 'react-icons/gr';
import { FaSearch } from 'react-icons/fa';


const Book1 = () => {

  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [depart, setDepart] = useState("");
  const [cls, setCls] = useState("Economy");
  const [count, setCount] = useState(1);

  const handleFrom = (e) => {
      setFrom(e.target.value);
      console.log(e.target.value);
  }

  const handleTo = (e) => {
    setTo(e.target.value);
    console.log(e.target.value);
}

const handleDepart = (e) => {
  setDepart(e.target.value);
  console.log(e.target.value);
}

const handleClass = (e) => {
  setCls(e.target.value);
  console.log(e.target.value);
}

const handlePlus = () => {

  setCount(count+1);
 
}

const handleMinus = () => {

  setCount(count-1);
 
}

  const handleSubmit = (e) => {
      e.preventDefault();
 

      navigate("/flights_tableOneway", {state: { from, to, depart, cls, count }});
  }

  const handleReset = () => {

    setDepart("");
    setCount(1);
  }


  return (
    <>
    

   

    <div className='mt-20 md:mt-28 text-center'>
        <h1 className='text-[16px] tracking-[10px] font-medium text-[rgb(122,121,121)] uppercase'>Flight Booking</h1>
    </div>
    
   
 <div className='mt-4 md:mt-10 flex flex-col justify-center items-center'>

        <div className='flex flex-row  justify-center items-center bg-[white]  rounded-full'>

        <NavLink to="/round_trip" className="signin rounded-l-full py-2 px-4 text-[18px]"> Round Trip</NavLink>
        <NavLink to="/one_way" className="signin bg-[black]  text-white rounded-r-full py-2 px-4 text-[18px]"> One Way</NavLink>

        </div>

 </div>

    <div className='mt-20 flex justify-center items-center mx-3'>

    <div className='pb-12 px-6 rounded-md shadow-current shadow-lg'>

<form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-5'>

   <div className='pb-4'>

        <img className="h-[70px] w-[100px] -mt-10 mx-auto" src="./Images/logo.png"alt="" />

   </div>

    

  <div className='relative flex  gap-3 '>

   <div className='flex flex-col gap-1'>


   <label htmlFor="from" className='text-[18px] font-medium'>From</label>
    <select className='w-[130px] h-[50px] pr-2 focus:outline-none bg-white text-black border-[1px] border-black pl-2 rounded-lg md:w-[200px]' required type="text"  
                name="message" onChange={handleFrom}> 
                
                <option disabled selected value={from} className=' bg-white text-black'>Departure</option>
                <option required value="San Jose" className=' bg-white text-black'>San Jose</option>
                <option required value="Chicago" className=' bg-white text-black'>Chicago</option>
                <option value="Olisphis" className=' bg-white text-black'>Olisphis</option>
                <option value="Shibum" className=' bg-white text-black'>Shibum</option>
                <option value="Weling" className=' bg-white text-black'>Weling</option>
                <option value="Chiby" className=' bg-white text-black'>Chiby</option>
                <option value="Odonhull" className=' bg-white text-black'>Odonhull</option>
                <option value="Hegan" className=' bg-white text-black'>Hegan</option>
                <option value="Oriaridge" className=' bg-white text-black'>Oriaridge</option>
                <option value="Flerough" className=' bg-white text-black'>Flerough</option>
                <option value="Yleigh" className=' bg-white text-black'>Yleigh</option>
                <option value="Oyladnard" className=' bg-white text-black'>Oyladnard</option>
                <option value="Trerdence" className=' bg-white text-black'>Trerdence</option>
                <option value="Zhotrora" className=' bg-white text-black'>Zhotrora</option>
                <option value="Otiginia" className=' bg-white text-black'>Otiginia</option>
                <option value="Plueyby" className=' bg-white text-black'>Plueyby</option>
                <option value="Vrexledo" className=' bg-white text-black'>Vrexledo</option>
                <option value="Ariosey" className=' bg-white text-black'>Ariosey</option>
                
                
    </select>

   </div>

   <div className='flex flex-col gap-1'>


<label htmlFor="to" className='text-[18px] font-medium'>To</label>
 <select className='w-[130px] h-[50px] pr-2 focus:outline-none bg-white text-black border-[1px] border-black pl-2 rounded-lg md:w-[200px]' required type="text"  
             name="message" onChange={handleTo}> 
             
             <option disabled selected value={to} className=' bg-white text-black'>Arrival</option>
             <option required value="San Jose" className=' bg-white text-black'>San Jose</option>
                <option required value="Chicago" className=' bg-white text-black'>Chicago</option>
                <option value="Olisphis" className=' bg-white text-black'>Olisphis</option>
                <option value="Shibum" className=' bg-white text-black'>Shibum</option>
                <option value="Weling" className=' bg-white text-black'>Weling</option>
                <option value="Chiby" className=' bg-white text-black'>Chiby</option>
                <option value="Odonhull" className=' bg-white text-black'>Odonhull</option>
                <option value="Hegan" className=' bg-white text-black'>Hegan</option>
                <option value="Oriaridge" className=' bg-white text-black'>Oriaridge</option>
                <option value="Flerough" className=' bg-white text-black'>Flerough</option>
                <option value="Yleigh" className=' bg-white text-black'>Yleigh</option>
                <option value="Oyladnard" className=' bg-white text-black'>Oyladnard</option>
                <option value="Trerdence" className=' bg-white text-black'>Trerdence</option>
                <option value="Zhotrora" className=' bg-white text-black'>Zhotrora</option>
                <option value="Otiginia" className=' bg-white text-black'>Otiginia</option>
                <option value="Plueyby" className=' bg-white text-black'>Plueyby</option>
                <option value="Vrexledo" className=' bg-white text-black'>Vrexledo</option>
                <option value="Ariosey" className=' bg-white text-black'>Ariosey</option>
             
             
 </select>

</div>

   
    
  </div>


  <div className='relative flex gap-3'>

<div className='flex flex-col gap-1'>


<label htmlFor="depart" className='text-[18px] font-medium'>Depart</label>
 
 <input className='w-[130px] h-[50px] pr-2 focus:outline-none bg-white text-black border-[1px] border-black pl-2 rounded-lg md:w-[200px]' required type="date"  
          name="date" onChange={handleDepart} value={depart} />

</div>

<div className='flex flex-col gap-1'>

<label htmlFor="class" className='text-[18px] font-medium'>Class</label>
    <select className='w-[130px] h-[50px] pr-2 focus:outline-none bg-white text-black border-[1px] border-black pl-2 rounded-lg md:w-[200px]' type="text"  
                name="message" onChange={handleClass}> 
                
                <option required selected value="Economy" className=' bg-white text-black'>Economy</option>
                <option required value="Business class" className=' bg-white text-black'>Business class</option>
                <option required value="First class" className=' bg-white text-black'>First class</option>
                
                
    </select>


</div>


 
</div>


<div className='relative flex md:flex-row gap-3 flex-col'>


   <div className='flex flex-col gap-1'>


<label htmlFor="pass" className='text-[18px] font-medium text-center pb-1'>Passenger</label>
 
 <div className='flex items-center justify-center gap-3'>
     <a
                className='border-[1px] border-black hover:bg-black hover:text-white flex justify-center items-center cursor-pointer h-[50px] w-[80px] rounded-lg text-[20px]'
                onClick={handlePlus}
                
            >
                +
            </a>
            <p className='text-xl'>{count}</p>
            <a
                
                className={`border-[1px] border-black hover:bg-black hover:text-white flex justify-center items-center cursor-pointer h-[50px] w-[80px] rounded-lg text-[25px] ${count === 0 ? 'disabled' : ''}`}
                onClick={handleMinus}
                style={{ pointerEvents: count === 1 ? 'none' : 'auto' }}
            >
                -
            </a>
 </div>

</div>

   
    
  </div>

    <div className='flex gap-4 justify-center items-center'>
        
    <button className='bg-black text-white flex items-center gap-1 font-[Poppins] duration-500 px-6 py-2  md:hover:bg-[#4e4e4e] rounded'>
      
      <FaSearch className='text-white' />
      Search

     </button>
       
     <a className='bg-black cursor-pointer flex items-center gap-1 text-white font-[Poppins] duration-500 px-6 py-2  md:hover:bg-[#4e4e4e] rounded' onClick={handleReset}>
        
        <GrPowerReset />
        <p>Reset</p>
        
        </a>
    
    </div>

    
</form>

</div>

    </div>
    
    </>
  )
}

export default Book1
