import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { addProduct } from '../Redux/actionsProduct';
import { useNavigate } from 'react-router-dom';
const Details = () => {
    const items=useSelector(data=>data.Product)
    const {id,type}=useParams()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [amount,setAmount]=useState(1)

    const [idk,setIdk]=useState(items.id);
    const [name,setName]=useState(items.name);
    const [price,setPrice]=useState(items.price);
    const [image,setImage]=useState(items.img1);

    const IncValue=()=>{
        if(amount<0){
            setAmount(0)
        }
        setAmount(amount+1)
    }
    const DecValue=()=>{
        if(amount>0){
            setAmount(amount-1)
        }

    }
   const handleClick=(idk,type,name,price,image,amount)=>{

    dispatch(addProduct({
            idk:idk,
            type:type,
            name:name,
            price:price,
            image:image,
            amount:amount
    }))
    navigate('/')
    }
  return (
    <div className='container p-10 mx-10'>
   
      {items.filter(item=>item.id===parseInt(id) )
      .map((item,index)=>{
        return(
            <div key={index} className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
            <div className='flex flex-col gap-6 lg:w-2/4'>
                <img src={item.img1} alt="" className='w-[80%] h-[80vh] aspect-square object-cover rounded-xl'/>
               
            </div>
            {/* ABOUT */}
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-violet-600 font-semibold'>Special Sneaker</span>
                    <h1 className='text-3xl font-bold'>{item.name}</h1>
                </div>
                <p className='text-gray-700'>
                Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
                </p>
                <h6 className='text-2xl font-semibold'>$ {item.price}</h6>
                <div className='flex flex-row items-center gap-12'>
                    <div className='flex flex-row items-center'>
                        <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={DecValue}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button 
                        className='bg-gray-200 py-2 px-4
                         rounded-lg text-violet-800 text-3xl' onClick={IncValue }>+</button>
                    </div>
                    <button 
                    onClick={()=>handleClick(item.id,item.type,item.name,item.price,item.img1,amount)} className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to Cart</button>
                </div>
            </div>
            </div>
        )
      })
      }
    </div>
  )
}

export default Details
