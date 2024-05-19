import React from 'react'
import "./Productcard.css"
import Product from './Product'
import { useNavigate } from 'react-router-dom'

function Productcard({Product}) {
  const navigate=useNavigate()

  const handelClick=()=>{
    navigate('/product')
  }
  
  return (
    <div
    
     className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
<img 
 onClick={handelClick}
className=' h-full w-full object-cover object-left-top' src={Product.imageUrl} alt=''/>
      </div>

      <div className='textPart bg-white p-3'>
      <div>
      <p className=' font-bold opacity-60'>URBANS</p>
        <p>KAYRAAH
Women Embroidered Georgette Straight Kurta</p>
      </div>
      <div className=' flex items-center space-x-2'>
      <p className=' font-semibold '>{Product.price}</p>
      <p className=' line-through opacity-50'>{Product.originalPrice}</p>
      <p className='text-green-600 font-semibold'>{Product.discount}</p>
      </div>
      </div>
    </div>
  )
}

export default Productcard