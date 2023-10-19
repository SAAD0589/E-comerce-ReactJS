import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Shopper from '../assets/shopper.png';
import {  Link, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidenav = () => {
  const items=useSelector(data=>data.Panier.length)

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
      {
        nav ?
          (
            <div>
              ss
            </div>
          ) :
          (
            <div></div>
          )
      }

<nav className="bg-gray-200 shadow shadow-lg w-100 px-8 md:block hidden">
  <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
    <div className="text-indigo-500 md:order-1">
      <img src={Shopper} className='relative w-[100%] h-[9vh]' alt="Shopper" />
    </div>
    <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
      <ul className="flex font-semibold justify-between">
        <li className="md:px-4 md:py-2 text-neutral-950">
          <Link to="/">Home</Link>
        </li>
        <li
          className="md:px-4 md:py-2 text-neutral-950"
         
        >
          <Link to="/Product">Products</Link>
         
        </li>
        <li className="md:px-4 md:py-2 hover:text-neutral-950">
          <a href="#contact">Contact</a>
        </li>
        <li className="md:px-4 md:py-2 hover:text-neutral-950">
        <div class="flex w-full flex-wrap items-center justify-between px-3">
    <div class="relative flex items-center">
      <span
        class="ml-3 rounded-md bg-red-600 px-[0.85em] py-[0.6em] text-[0.6rem] font-bold leading-none text-white"
        >{items}</span>
      <Link
        class="ml-1 py-2 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
        to="Panier">
        <span class="[&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-5 w-5">
            <path
              d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
        </span>
      </Link>
    </div>
  </div>        </li>
      </ul>
      
    </div>
  </div>
</nav>


    </div>
  )
}

export default Sidenav
