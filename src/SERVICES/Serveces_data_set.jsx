

import React from 'react'

const Serveces_data_set = (props) => {

const {img, title, desc} = props;

  return (

    <a className='cursor-default'>

            <div className='h-full  py-10 w-full px-4 border-[1px] rounded-lg shadow-xl md:hover:transition md:hover:duration-500 md:hover:scale-110 border-purple-700 mx-auto'>
                    
                    

                    <div className='pb-3'>
                        <img className='mx-auto h-[200px] w-[200px] rounded-md' src={img} alt="" />
                    </div>
                    <h2 className='text-center pb-3 font-bold text-purple-700 text-[20px]'>{title}</h2>
                    <p className='text-center'>{desc}</p>

                

            </div>

    </a>

  )
}

export default Serveces_data_set

