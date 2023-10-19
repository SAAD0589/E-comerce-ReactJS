import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Products = () => {
    const items=useSelector(data=>data.Product)
    const [ListProducts,setListProducts]=useState('')
  return (
    <div className="flex">
    <div className="w-3/4">
        
      {/* Display three cards in a row */}
      <div className="flex flex-wrap justify-between">
        {items.filter(item=>item.type.toLowerCase().includes(ListProducts))
        
        
        .map((product, index) => (
          <div id="men" key={index} style={{ width: "30%" }} className="md:p-8">
            <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
              <img src={product.img1} className="md:h-full md:w-full object-cover" alt={product.name} />
            </div>
            <div className="p-6">
              <div className="mb-2 flex items-center justify-between">
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                  {product.name}
                </p>
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                  {product.prix}
                </p>
              </div>
              <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link
                to={`/${product.id}/${product.type}`}
                className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Shop
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="w-1/4">
      {/* Right bar with search bar */}
      <div className="p-10">
        <div className="relative mb-3" data-te-input-wrapper-init>
          <input
          onChange={e=>setListProducts(e.target.value)}
            type="search"
            className="peer block min-h-[auto] w-full rounded
             border-0 px-3 py-[0.32rem] leading-[1.6]
              outline-none transition-all duration-200 ease-linear
               focus:placeholder:opacity-100 peer-focus:text-primary
                data-[te-input-state-active]:placeholder:opacity-100
                 motion-reduce:transition-none dark:text-neutral-200
                  dark:placeholder:text-neutral-200 dark:peer-focus:text-primary
                   [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleSearch2"
            placeholder="Type query"
          />
          <label
            htmlFor="exampleSearch2"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            Search
          </label>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Products
