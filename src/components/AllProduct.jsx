import React from 'react'
import Products from './Products'

const AllProduct = () => {
  return (
    <div className='px-2 py-8'>
    <div>
    <img 
      className='w-full h-[80vh]'
      src='https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1795'
          style={{ filter: 'brightness(25%)' }}
      
      />
 <div className=' absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col space-y-10'>
            <p className='text-white text-6xl font-bold'>Check Our Products</p>
            <p className='text-white text-xl '>Awsome,clean & creative</p>
             </div>
    </div>
      

      <Products/>
      
    </div>
  )
}

export default AllProduct
