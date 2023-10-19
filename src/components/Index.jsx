import React from 'react'
import shop from '../assets/shop.jpg';
import men from '../assets/men.jpg';
import woman from '../assets/woman.jpg';
import kids from '../assets/kids.jpg';
import accs from '../assets/accs.jpg';
import { Link } from 'react-router-dom';
import ProductMenu from './ProductMenu'
import data from './data/Product.json'
import Footers from './Footers';

const Index = () => {

  return (<>
    <div className='container px-20 py-8 flex'>
      <div className='flex w-1/2 relative'>
        <div>

          <img src={shop} alt="Description for Image 1" className='w-[100%] h-[75vh]' style={{ filter: 'brightness(50%)' }} />
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col space-y-6'>
            <p className='text-white text-5xl font-bold'>We Are SlitonShop</p>
            <p className='text-white text-2md '>Awsome,clean & creative</p>
            <Link to='/Product' className='text-white text-2md border-white py-2 px-4 rounded relative
        hover:bg-white hover:text-slate-900 transition-colors duration-500  
        '>
              Purchase Now!
            </Link>   </div>
        </div>
      </div>

      <div className='w-1/2 flex flex-col justify-between px-20'>
        <div className='flex flex-row justify-between items-center gap-6'>
          <a href='#woman' className='relative cursor-pointer' >
            <img src={woman} alt="Description for Image 1"
              className=' w-[300px] h-[35vh]' style={{ filter: 'brightness(50%)' }} />
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col'>
              <p className='text-white text-xl text-2md font-bold'>Woman</p>
              <p className='text-white text-2md '>Best Clothes For Woman</p>
            </div>
          </a>

          <a href='#men' className='relative cursor-pointer'>
            <img src={men} alt="Description for Image 1" className='w-[300px] h-[35vh]' style={{ filter: 'brightness(50%)' }} />
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col'>
              <p className='text-white text-xl font-bold'>Men</p>
              <p className='text-white  text-2md '>Best Clothes For Men</p>

            </div>
          </a>
        </div>
        <div className='flex flex-row justify-between items-center gap-6'>
          <a href='#kids' className='relative cursor-pointer'>
            <img src={kids} alt="Description for Image 1" className='w-[300px] h-[35vh]' style={{ filter: 'brightness(50%)' }} />
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col'>
              <p className='text-white text-xl font-bold'>Kids</p>
              <p className='text-white  text-2md '>Best Clothes For Kids</p>

            </div>
          </a>
          <div className='relative cursor-pointer'>
            <img src={accs} alt="Description for Image 1" className='w-[300px] h-[35vh]' style={{ filter: 'brightness(50%)' }} />
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col'>
              <p className='text-white text-xl font-bold'>Accessories</p>
              <p className='text-white  text-2md '>Best Clothes For Accessories</p>

            </div>
          </div>
        </div>
      </div>
    </div>
    <ProductMenu dataMen={data} />

    <Footers/>
  </>
  )
}

export default Index
