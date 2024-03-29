import { Avatar, Grid, Rating,Box } from '@mui/material'
import React from 'react'

function ProductReviewCart() {
  return (
    <div>
        <Grid container spacing={2} gap={2}>
        <Grid item xs={1}>
        <Box>
            <Avatar className='text-white' sx={{width:56,height:56,bgcolor:'#9155fd'}}>R</Avatar>
        </Box>
        </Grid>
        <div className='space-y-2'> 
        <div>
            <p className=' font-semibold text-lg'>Ram</p>
            <p className=' opacity-70'>
                April 2023
            </p>
        </div>
        </div>
        <Rating value={4.5} name='half-rating' readOnly/>
        </Grid>
    
          <p>ghadgasasghfuiaeghfedgfsaghdhb</p>
    </div>
  )
}

export default ProductReviewCart