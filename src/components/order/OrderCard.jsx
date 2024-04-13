import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';


function OrderCard() {
  return (
    <div className=' p-5 shadow-lg hover:shadow-2xl'>
        <Grid container spacing={2} sx={{justifyContent:'space-between'}}>

        <Grid item xs={6}>

        <div  className=' flex cursor-pointer '>
        <img className=' w-[5rem] h-[5rem] object-cover object-top' src='https://rukminim2.flixcart.com/image/1000/1000/kjkbv680-0/t-shirt/9/v/o/m-t285hs-as7whdngr-seven-rocks-original-imafz3wkfs8pevqc.jpeg?q=70&crop=false'/>

        <div className=' ml-5 space-y-2'>
        <p className=''>Men Slim Mid Rise Black Jeans</p>
        <p className='Opacity-50 text-xs font-semibold'>Size: M</p>
         <p className=' opacity-50 text-xs font-semibold'>Color:Black</p>
        </div>
        </div>
        </Grid>

        <Grid item xs={2}>
<p>$80</p>
        </Grid>

        <Grid item xs={4}>
       {true && <p>
       <AdjustIcon className=' text-green-500 mr-2 text-sm'/>
            <span> Delivered on novenber 30</span>
            <div>
            <span className=' text-sm'>your item has been delivered</span>
            </div>
        </p>}

        {false && <p>
            <span> Delivered on novenber 30</span>
        </p>}
        </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard