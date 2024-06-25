import React, { useState } from 'react'

import Swal from'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { TiTick } from 'react-icons/ti';
import { GrPowerReset } from 'react-icons/gr';


const Passenger = () => {

  const navigate = useNavigate();  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  const handleFirstName = (e) => {

        const value = e.target.value;
        const regex = /^[a-zA-Z\s]*$/;
    
        if (regex.test(value)) {
          setFirstName(value);
        } else {
          Swal.fire({
            title: "Error",
            text: "Invalid name",
            icon: "error"
          });
        }
    
        console.log(value);
      
  }

  const handleLastName = (e) => {

    const value = e.target.value;
    const regex = /^[a-zA-Z\s]*$/;

    if (regex.test(value)) {
      setLastName(value);
    } else {
      Swal.fire({
        title: "Error",
        text: "Invalid name",
        icon: "error"
      });
    }

    console.log(value);
  
}

  const handlePhone = (e) => {
      setPhone(e.target.value);
      console.log(e.target.value);
  }

  const handleDOB = (e) => {
    setDob(e.target.value);
    console.log(e.target.value);
}

  const handleSubmit = (e) => {
      e.preventDefault();
      
      if (firstName.length <= 3) {
        Swal.fire({
            title: "Error",
            text: "First Name must be more than 3 characters",
            icon: "error"
        });
        return;
    }

    if (firstName.length <= 3) {
        Swal.fire({
            title: "Error",
            text: "Last Name must be more than 3 characters",
            icon: "error"
        });
        return;
    }

      Swal.fire({
          title: "Success",
          text: "Successfully proceed",
          icon: "success"
      });

      navigate("/payment");
  }

  const handleReset = () => {
      setFirstName("");
      setLastName("");
      setPhone("");
      setDob("")
  }


  return (
    <>
    


    <div className='mt-20 md:mt-28 text-center'>
        <h1 className='text-[16px] tracking-[10px] font-medium text-[rgb(122,121,121)] uppercase'>Passenger Details</h1>
    </div>
    
    <div className='mt-16 flex justify-center mx-3'>

    <div className='pb-12 px-6 rounded-md shadow-current shadow-lg'>

<form  onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-5'>

   <div className='pb-4'>

        <img className="h-[70px] w-[100px] -mt-10 mx-auto" src="./Images/logo.png"alt="" />

   </div>


   <div className='relative'>
        <input className='w-[300px] h-[50px] focus:outline-none border-2 border-black pl-4 rounded-lg md:w-[400px]' required type="name" 
        name="first_name" onChange={handleFirstName} value={firstName} />
        <div className='label absolute bg-white text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your First name</div>
    </div>

    <div className='relative'>
        <input className='w-[300px] h-[50px] focus:outline-none border-2 border-black pl-4 rounded-lg md:w-[400px]' required type="name" 
        name="last_name" onChange={handleLastName} value={lastName} />
        <div className='label absolute bg-white text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your Last name</div>
    </div>

    <div className='relative'>
        <input className='w-[300px] h-[50px] focus:outline-none border-2 border-black pl-4 rounded-lg md:w-[400px]' required type="number" 
        name="phone" onChange={handlePhone} value={phone} />
        <div className='label absolute bg-white text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your phone no</div>
    </div>

    <div className='relative'>
        <input className='w-[300px] h-[50px] bg-transparent focus:outline-none border-2 border-black pl-4 rounded-lg md:w-[400px]' required type="date" 
        name="dob" onChange={handleDOB} value={dob} />
        <div className='label absolute bg-white text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your DOB</div>
    </div>

    <div className='flex gap-4 justify-center items-center'>
        
       <button className='bg-black flex items-center gap-1 text-white font-[Poppins] duration-500 px-6 py-2  md:hover:bg-[#4e4e4e] rounded'>
        
        <TiTick className='text-white border-[1px] border-white py-[0.5px] px-[0.5px] rounded-full' />
        <p>Proceed</p>
        
        </button>
       
        <a className='bg-black flex items-center gap-1 cursor-pointer text-white font-[Poppins] duration-500 px-6 py-2  md:hover:bg-[#4e4e4e] rounded' onClick={handleReset}>
        
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

export default Passenger
