import React, { useState } from 'react'

import Swal from'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { GrPowerReset } from 'react-icons/gr';



const Forgot_pass = () => {

  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");


  const handleEmail = (e) => {
      setEmail(e.target.value);
      console.log(e.target.value);
  }


  const handleSubmit = (e) => {
      e.preventDefault();

      Swal.fire({
          title: "Success",
          text: "Send Successful",
          icon: "success"
      });

      navigate('/signin');
  }

  const handleReset = () => {

      setEmail("");
  }


  return (
    <>
    

   

    <div className='mt-20 md:mt-28 text-center'>
        <h1 className='text-[16px] tracking-[10px] font-medium text-[rgb(122,121,121)] uppercase'>Forget Password</h1>
    </div>



    <div className='mt-20 flex justify-center items-center mx-3'>

    <div className='pb-12 px-6 rounded-md shadow-current shadow-lg'>

<form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-5'>

   <div className='pb-4'>

        <img className="h-[70px] w-[100px] -mt-10 mx-auto" src="./Images/logo.png"alt="" />

   </div>

    

    <div className='relative'>
        <input className='w-[300px] h-[50px] focus:outline-none border-2 border-black pl-4 rounded-lg md:w-[400px]' required type="email" 
        name="email" onChange={handleEmail} value={email} />
        <div className='label absolute bg-white text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your email</div>
    </div>



    <div className='flex gap-4 justify-center items-center'>
        
    <button className='bg-black text-white font-[Poppins] duration-500 px-6 py-2  md:hover:bg-[#4e4e4e] rounded'>Send</button>
       
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

export default Forgot_pass
