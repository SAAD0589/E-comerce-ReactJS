import React from 'react'

const Abouts = (props) => {
    return (
        <div className='container  flex flex-row justify-between p-10 mx-10'>
            <div className='w-[50%] '>
                <h1 className='self-start text-5xl p-6'>Explore Our Products</h1>
                <p className='self-start text-slate-400 py-4 px-3'>You are allowed to use this HexaShop HTML CSS template.
                    You can feel free to modify or edit this layout.
                    You can convert this template as any kind of ecommerce CMS theme as you wish.</p>
                <p className='p-3 font-medium'>You are not allowed to redistribute this template ZIP file on any other website.</p>
                <p className='self-start text-slate-400 py-3 px-3'>There are 5 pages included in this HexaShop Template and we are providing it to you
                    for absolutely free of charge at our TemplateMo website.
                    There are web development costs for us.</p>
                <p className='self-start text-slate-400 py-3 px-3'>If this template is beneficial for your website or business,
                    please kindly support us a little via PayPal.
                    Please also tell your friends about our great website. Thank you.</p>
                <button
                 className="text-sm font-medium text-slate-900 border-2 w-[25%] 
                 hover:bg-slate-900 hover:text-white bg-white-800 px-2 py-3 my-5 mx-3 duration-300"
                >Discover More</button>
            </div>
            <div className='w-[50%] flex justify-evenly p-8'>
                <div className='flex flex-col gap-8'>
                    <div className="w-[82%] h-[30vh]   border-black p-4 bg-slate-200 flex justify-center items-center flex-col">
                        <h1 className="text-2xl font-black	">Leather Bags</h1>
                        <p className="text-slate-400 py-4 px-3">Latest Collection</p>
                    </div>
                    <div className="w-[100%] flex justify-evenly pr-14">
                        <img src={props.woman} className='w-[320px] h-[30vh]' />
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <img src={props.accs} className='w-[300px] h-[30vh]' />
                    <div className='flex flex-col gap-2'>
                        <div className="w-[100%] h-[30vh]  border-black p-3 bg-slate-200 flex justify-center items-center flex-col">
                            <h1 className="text-2xl font-black	">Different Types</h1>
                            <p className="text-slate-400 py-4 px-3">Over 304 Products</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Abouts
