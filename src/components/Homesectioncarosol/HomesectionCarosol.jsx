import React from 'react'
import HomesectionCard from '../HomesectionCard/HomesectionCard';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button } from '@mui/material';
function HomesectionCarosol() {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 4 },
    };
    const items=[1,1,1,1,1].map((item)=><HomesectionCard/>)
  return (
    <div className=' relative px-4 lg:px-8'>
    <div className='relative p-5'>
        <AliceCarousel

    items={items}
    
    responsive={responsive}
    controlsStrategy="alternate"
/>
<Button variant='contained' className='z-50' sx={{position:'absolute', top:'8rem' , right:'0rem', transform:"translate(50%) rotate(180deg)"}} aria-label='next'> <KeyboardArrowRightIcon/> </Button>
    </div>
    </div>
  
  )
}

export default HomesectionCarosol