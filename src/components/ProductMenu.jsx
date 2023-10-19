import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductMenuW from './ProductMenuW';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductMenu = (props) => {
    const items=useSelector(data=>data.Product)

    return (
        <div className="container p-20  w-[100%]">
            <div className='md:flex md:flex-col md:items-center md:justify-center'>
                <h1 className="md:self-start self-center md:text-5xl text-2xl w-[100%]  p-8">Men's Latest</h1>
                <p className='md:self-start text-slate-400 inline text-center self-start text-sm md:px-8 
                  md:px-4'>
                    Details to details is what makes Hexashop different from the other themes.</p>            </div>

            <div className="flex flex-row items-center justify-center mx-6">
                <Carousel
                    showArrows={true}
                    showStatus={false}
                    showThumbs={false}
                    emulateTouch={true}
                    infiniteLoop={true}
                    selectedItem={0}
                    dynamicHeight={false}
                    centerMode={true}
                    centerSlidePercentage={33.33}
                    swipeable={true}
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <button
                                type="button"
                                onClick={onClickHandler}
                                className="absolute left-0 z-10 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300"
                                style={{ left: "1rem" }}
                            >
                                {"<"}
                            </button>
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <button
                                type="button"
                                onClick={onClickHandler}
                                className="absolute right-0 z-10 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300"
                                style={{ right: "1rem" }}
                            >
                                {">"}
                            </button>
                        )
                    }
                >
                    {items.filter(product=>product.type==='men')
                    .map((product, index) => (
                        <div id='men' key={index} style={{ width: "90%" }} className='md:p-8'>
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
                                <Link to={`/${product.id}/${product.type}`}className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                    Shop
                                </Link>
                            </div>
                        </div>
                    ))}
                </Carousel>

            </div>
            <ProductMenuW dataWomen={items}/>
        </div>
    )
}

export default ProductMenu
