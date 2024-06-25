import React from 'react'

import Data from './data.json'
import Serveces_data_set from './Serveces_data_set';

const Services = () => {

let items = [];

items = Data.map((item,index) => <Serveces_data_set key={index} img={item.img} title={item.title} desc={item.desc} />);

  return (
   <>
   
   <div className='mt-20 mx-3 sm:mx-3 md:mx-32'>

        <div className='text-center'>

            <h1 className='text-3xl font-serif font-semibold'>Our All <span className='text-purple-700'>Services</span></h1>

        </div>
{/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 */}

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10'>

            
                {items}
            

        </div>


   </div>
   
   </>
  )
}

export default Services
