import React from 'react'

function HomesectionCard() {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-black'>

    <div className='h-[13rem] w-[10rem]'>
    <img className='object-cover object-top h-full w-full' src='https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/x/l/d/s-st28-vebnor-original-imagq6aqgh2hzv22.jpeg?q=70&crop=false'/>
    </div>
    <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>Casual Shirt</h3>
        <p className=' mt-2 text-sm text-gray-400'>
        Men Regular Fit Checkered Spread Collar Casual Shirt

        </p>
    </div>
</div>
  )
}

export default HomesectionCard