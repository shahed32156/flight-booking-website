import React, {useState} from 'react'
import Swal from'sweetalert2';

const Subscribe = () => {


    const [email, setEmail] = useState("");


    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Successfully Subscribed",
            icon: "success"
        });

        setEmail("");
    }
  return (
    <>

<div className='mt-20 md:mt-28 text-center mx-3'>
        <h1 className='text-3xl font-semibold font-[poppins]'>Subscribe Newsletters & get Latest news</h1>
</div>
    
    <form onSubmit={handleSubmit} action="" className='mt-10 mx-3 flex flex-col md:flex-row gap-6 items-center justify-center'>


            <div className='relative'>

                        <input className='w-[300px] h-[50px] focus:outline-none border-2 border-black pl-4 rounded-lg md:w-[400px]' required type="email" 
                        name="email" id="input2" onChange={handleEmail} value={email} />
                        <div className='label absolute bg-white text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your email</div>
            
            </div>

            <div>

                        <button className="bg-black text-white font-[Poppins] duration-500 px-6 py-2 mx-4 md:hover:bg-[#4e4e4e] rounded">
                        Subscribe
                        </button>

            </div>


    </form>
    
    </>
  )
}

export default Subscribe
