import React from 'react'
import {Grid} from '@mui/material'

const orderStatus=[
    {lable:"on the way" ,value:' on_the_way'},
    {lable:"Delivered" ,value:' delivered'},
    {lable:"Cancelled" ,value:' cancelled'},
    {lable:" Returned" ,value:'returned'},
]


function Order() {
  return (
    <div>
        <Grid container sx={{ justifyContent:"space-between"}}>
        <Grid item xs={2.5}>
        <div className=' h-auto shadow-lg bg-white p-5 sticky top-5'>
        <h1 className=' font-bold text-lg'>
            Filter
        </h1>
        <div className='space-y-4 mt-10'>
        <h1 className=' font-semibold'> 
        OrderStatus
        </h1>
        </div>
        </div>
        </Grid>


        <Grid item>

        </Grid>
        </Grid>
    </div>
  )
}

export default Order