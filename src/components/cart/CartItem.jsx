import React from 'react'

function CartItem() {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex items-center'>
        <div className='w-[5rem] h-[8rem] lg:w-[9rem] lg:h-[7rem]'>
      
<img src="https://rukminim2.flixcart.com/image/1000/1000/kjkbv680-0/t-shirt/9/v/o/m-t285hs-as7whdngr-seven-rocks-original-imafz3wkfs8pevqc.jpeg?q=70&crop=false"/>
        </div>



<div className='ml-5 space-y-1'>
<p className='font-semibold'>Mens slim solid T-shirt</p>
<p className='opacity-70'>Size: L,White</p>
<p className='opacity-70 mt-2'>seller:Crishtails</p>
<p className=" font-semibold">199</p>
                <p className="opacity-50 line-through ">266</p>
                <p className=" text-green-600 font-semibold">5% Off</p>
</div>

        </div>
    </div>
  )
}

export default CartItem