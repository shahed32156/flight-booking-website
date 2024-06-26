import React, { useState } from 'react'

import { GrPowerReset } from "react-icons/gr";
import { FaLock } from "react-icons/fa";
import Swal from'sweetalert2';
import { useNavigate } from 'react-router-dom';


const Payment = () => {

  const navigate = useNavigate();  
  const [cardNumber, setCardNumber] = useState("");
  const [expire, setExpire] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumber = (e) => {

    setCardNumber(e.target.value);
    console.log(e.target.value);
      
      
  }

  const handleExpire = (e) => {

    setExpire(e.target.value);
    console.log(e.target.value);
  
}

  const handleCVV = (e) => {
    const value = e.target.value;
    const regex = /^[0-9]*$/;

    if (regex.test(value)) {
      setCvv(value);
    } else {
      Swal.fire({
        title: "Error",
        text: "Invalid CVV",
        icon: "error"
      });
    }

    console.log(value);
  }


  const handleSubmit = (e) => {
      e.preventDefault();
      
      if (cardNumber.length != 12) {
        
        Swal.fire({
            title: "Error",
            text: "Card number must be 12 digits long",
            icon: "error"
        });

        return;

      }

      if (cvv.length != 3) {

        Swal.fire({
            title: "Error",
            text: "CVV must be 3 digits long",
            icon: "error"
        });
    
        return;
      }


        Swal.fire({
            title: "Success",
            text: "Successfully paid",
            icon: "success"
        });

        navigate("/home");
      

      
  }

  const handleReset = () => {
      setCardNumber("");
      setExpire("");
      setCvv("");
  }


  return (
    <>
    


    <div className='mt-20 md:mt-28 text-center'>
        <h1 className='text-[16px] tracking-[10px] font-medium text-[rgb(122,121,121)] uppercase'>Payment Invoice</h1>
    </div>
    

    <div className='mt-16 flex justify-center mx-3'>

    <div className='pb-12 px-6 rounded-md shadow-current shadow-lg'>

<form  onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-5'>

   <div className='pb-4'>

        <img className="h-[70px] w-[100px] -mt-10 mx-auto" src="./Images/logo.png"alt="" />

   </div>
 

   <div>

     <h3 className='text-start text-[20px] font-medium'>Accepted Cards</h3>
      
   </div>

   <div className='-mt-10'>

    <img className='h-[150px] w-[300px]' src="./Images/all_cards.png" alt="" />
   
    
   </div>

   <div className='relative -mt-8'>
        <input className='w-[300px] h-[50px] focus:outline-none border-2 border-black pl-4 rounded-lg md:w-[400px]' required type="number" 
        name="card_number" onChange={handleCardNumber} value={cardNumber} />
        <div className='label absolute bg-white text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Card number</div>
    </div>

    <div className='relative'>
        <input className='w-[300px] h-[50px] focus:outline-none border-2 border-black pl-4 rounded-lg md:w-[400px]' required type="date" 
        name="expire" onChange={handleExpire} value={expire} />
        <div className='label absolute bg-white text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Expiration date</div>
    </div>

    <div className='relative'>
        <input className='w-[300px] h-[50px] focus:outline-none border-2 border-black pl-4 rounded-lg md:w-[400px]' required type="password" 
        name="cvv" onChange={handleCVV} value={cvv} />
        <div className='label absolute bg-white text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>CVV</div>
    </div>

    <div className='flex gap-4 justify-center items-center'>
        
       <button className='bg-black flex items-center gap-1 text-white font-[Poppins] duration-500 px-6 py-2  md:hover:bg-[#4e4e4e] rounded'>
        
        <FaLock className='text-white text-[15px]' />
        <p>Pay</p>
        
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

export default Payment
