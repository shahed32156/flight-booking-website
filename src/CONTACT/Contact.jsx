import React, { useState  } from 'react'

import Swal from'sweetalert2';

import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const handleName = (e) => {

        const value = e.target.value;
        const regex = /^[a-zA-Z\s]*$/;
    
        if (regex.test(value)) {
          setName(value);
        } else {
          Swal.fire({
            title: "Error",
            text: "Invalid name",
            icon: "error"
          });
        }
    
        console.log(value);
      
  }

  const handleEmail = (e) => {
      setEmail(e.target.value);
      console.log(e.target.value);
  }

  const handleQuery = (e) => {
      setQuery(e.target.value);
      console.log(e.target.value);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      
      if (name.length <= 3) {
          Swal.fire({
              title: "Error",
              text: "Name must be more than 3 characters",
              icon: "error"
          });
          return;
      }

      Swal.fire({
          title: "Success",
          text: "Successfully sent your query",
          icon: "success"
      });

  }

  const handleReset = () => {
      setName("");
      setEmail("");
      setQuery(""); 
  }
  
  return (
    <>
   

   <div className='mt-20 md:mt-28 text-center mx-3'>
        <h1 className='text-[16px] tracking-[10px] font-medium text-[rgb(122,121,121)] uppercase'>Contact with us</h1>
    </div>


    <div className='flex flex-col gap-6 md:flex-col lg:flex-row mx-3 md:mx-52 justify-between items-center mt-10'>
        
           <div className='flex flex-col gap-3 justify-center mx-3'>

              
              <h1 className='w-full md:w-[600px] text-xl md:text-4xl font-bold font-mono'>Feel free to contact with us!</h1> 
              <p className='w-full md:w-[550px] text-justify'>Need assistance with your booking or have any queries? Our dedicated support team is here to help you 24/7. Reach out to us via:</p>
              <ul>
                <li> <span className='font-semibold'>Phone:</span> +1-800-123-4567 </li>
                <li> <span className='font-semibold'>Email:</span> support@flightbookingagency.com </li>
                <li> <span className='font-semibold'>Address:</span> 1234 Aviation Way, Suite 100, Los Angeles, CA 90001 </li>
              </ul>

              <div className='mt-3 flex gap-3'>

                  
                    
                    <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300'><FaFacebook className='text-[30px]' /></a>
                    
                    
                    <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300'><RiWhatsappFill className='text-[30px]' /></a>
                    
                    
                    <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300'><FaTwitter className='text-[30px]' /></a>
                    
                    
                    <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300'><FaYoutube className='text-[30px]' /></a>
                    
                
                </div>


                <div className='mt-6'>

<form onSubmit={handleSubmit} className='flex flex-col gap-5'>

    <div className='relative'>
        <input className='w-[300px] h-[50px] focus:outline-none border-2 border-black pl-4 rounded-lg md:w-[400px]' required type="text" 
        name="name" id="input" onChange={handleName} value={name} />
        <div className='label absolute bg-white text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your name</div>
    </div>

    <div className='relative'>
        <input className='w-[300px] h-[50px] focus:outline-none border-2 border-black pl-4 rounded-lg md:w-[400px]' required type="email" 
        name="email" id="input2" onChange={handleEmail} value={email} />
        <div className='label absolute bg-white text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your email</div>
    </div>

    <div className='relative'>
        <textarea  className='w-[300px] h-[50px] focus:outline-none border-2 border-black pl-4 rounded-lg md:w-[400px]' required 
        name="message" id="query" onChange={handleQuery} value={query} ></textarea>
        <div className='label absolute bg-white text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your query</div>
    </div>

    <div className='flex gap-4 items-center'>
        
       <button className='bg-black text-white font-[Poppins] duration-500 px-6 py-2  md:hover:bg-[#4e4e4e] rounded'>Send</button>
       
      <a className='bg-black cursor-pointer text-white font-[Poppins] duration-500 px-6 py-2  md:hover:bg-[#4e4e4e] rounded' onClick={handleReset}>Reset</a>
    </div>

    
</form>

</div>


           </div>

           <div className=''>

           <img className='mx-auto w-full md:h-[500px] md:w-[450px]' src="./Images/contact.png" alt="" />   
          
          </div>
   

    </div>

    

    
    </>
  )
}

export default Contact
