import React from 'react'
import Address from '../Checkout/Address'
import OrderTracker from './OrderTracker'
import OrderCard from './OrderCard'
import { Grid,Box } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';

function OrderDetails() {
  return (
    <div className=' px:5 lg:px-20'>
    <div>
        <h1 className=' font-bold text-xl py-7'>Deliver Here </h1>
        <Address/>
        <div className=' mt-7'>
        <OrderTracker activeStape={3}/>
       <div>
        <Grid className='space-w-5' container>
       {[1,1,1,1].map((item)=> <Grid item container className=' shadow-xl rounded-md p-5 border'  sx={{alignItems:"center" ,justifyContent:"space-between"}}>

<Grid item xs={6}>
<div className=' flex items-center space-x-7'>
    <img className=' w-[5rem] h-[5rem] object-cover object-top' src='https://rukminim2.flixcart.com/image/1000/1000/kjkbv680-0/t-shirt/9/v/o/m-t285hs-as7whdngr-seven-rocks-original-imafz3wkfs8pevqc.jpeg?q=70&crop=false'/>

    <div className=' space-y-2 ml-5 '>
    <p className=' font-semibold'> Men Slim mid </p>
    <p className=' space-x-5 text-xs'>
        <span>Color: Pink</span>
        <span> size:M</span>
    </p>
    <p> Seller: linaria</p>
    <p>$77</p>
    </div>
</div>

</Grid>

<Grid item>
<Box >
<StarBorderIcon sx={{fontSize:'2rem'}} className='px-2'/>
<span> Rate & Review Product</span>
</Box>

</Grid>
</Grid>)}

        </Grid>
       </div>
        </div>
    </div>
    </div>
  )
}

export default OrderDetails