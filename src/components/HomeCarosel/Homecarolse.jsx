import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Maincarosoul } from '../../MaincarouselData/MainCarosouldata.js';
import Button from '@mui/material/Button'

function Maincrosel() {

    const items = Maincarosoul.map((pic)=> <img class="flex justify-center items-center h-screen" width="" src={pic.image}/>)
  return (
    <div className='relative px-4 lg:px-4'>
    <div className='relative p-5'>
      <AliceCarousel
        mouseTracking
        items={items}
        // autoPlay
        // autoPlayInterval={1000}
        infinite
        controlsStrategy="alternate"
    />
    </div>
    
    </div>
    
  )
}

export default Maincrosel