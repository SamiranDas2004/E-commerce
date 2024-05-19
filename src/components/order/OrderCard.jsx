import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { MensData } from '../../Data/mens';
import { useParams } from 'react-router-dom';

function OrderCard() {
  const { ide } = useParams();
  console.log(ide);
  const selectedItem = MensData.find(item => item.id == ide);
  // console.log(selectedItem);

  return (
    <div className=' p-5 shadow-lg hover:shadow-2xl'>
        <Grid container spacing={2} sx={{justifyContent:'space-between'}}>

        <Grid item xs={6}>

        <div  className=' flex cursor-pointer '>
        <img className=' w-[5rem] h-[5rem] object-cover object-top' src={selectedItem.imageUrl}/>

        <div className=' ml-5 space-y-2'>
        <p className=''>Men Slim Mid Rise Black Jeans</p>
        <p className='Opacity-50 text-xs font-semibold'>Size: M</p>
         <p className=' opacity-50 text-xs font-semibold'>Color:Black</p>
        </div>
        </div>
        </Grid>

        <Grid item xs={2}>
<p>{selectedItem.price}</p>
        </Grid>

        {/* <Grid item xs={4}>
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
        </Grid> */}

        </Grid>
    </div>
  )
}

export default OrderCard