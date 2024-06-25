import React, { useState } from 'react'

import Swal from'sweetalert2';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { GrPowerReset } from 'react-icons/gr';


const Signin = () => {

  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");


  const handleEmail = (e) => {
      setEmail(e.target.value);
      console.log(e.target.value);
  }

  const handlePass = (e) => {
    setPass(e.target.value);
    console.log(e.target.value);
}

  const handleSubmit = (e) => {
      e.preventDefault();
 

      Swal.fire({
          title: "Success",
          text: "Successfully signed in",
          icon: "success"
      });

      navigate('/home');
  }

  const handleReset = () => {

      setEmail("");
      setPass("");
  }


  return (
    <>
    

   

    <div className='mt-20 md:mt-28 text-center'>
        <h1 className='text-[16px] tracking-[10px] font-medium text-[rgb(122,121,121)] uppercase'>Sign in</h1>
    </div>
    
   
 <div className='mt-4 md:mt-10 flex flex-col justify-center items-center'>

        <div className='flex flex-row  justify-center items-center bg-[white]  rounded-full'>

        <NavLink to="/signin" className="signin bg-[black] text-white rounded-l-full py-2 px-4 text-[18px]"> User</NavLink>
        <NavLink to="/admin_signin" className="signin rounded-r-full py-2 px-4 text-[18px]"> Admin</NavLink>

        </div>

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

    <div className='relative'>
        <input className='w-[300px] h-[50px] bg-transparent focus:outline-none border-2 border-black pl-4 rounded-lg md:w-[400px]' required type="password" 
        name="password" onChange={handlePass} value={pass} />
        <div className='label absolute bg-white text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your password</div>
    </div>
   
    <div>

      <p className='text-[14px]'>Don't have an account? <Link to="/signup" className='text-blue-500 hover:underline'>Sign up</Link></p>

    </div>

    <div className='flex gap-4 justify-center items-center'>
        
       <button className='bg-black text-white font-[Poppins] duration-500 px-6 py-2  md:hover:bg-[#4e4e4e] rounded'>Sign in</button>
       
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

export default Signin
