import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Maincarosoul } from '../../MaincarouselData/MainCarosouldata.js';
import Button from '@mui/material/Button'
// import HomeVideo from '../HomesectionCard/HomeVideo.jsx';

function Maincrosel() {

    const items = Maincarosoul.map((pic)=> <img class="flex justify-center w-full  items-center h-screen" width="" src={pic.image}/>)
  return (
    <div className='relative px-4 lg:px-4'>
    <div className='relative p-5'>
      <AliceCarousel
        mouseTracking
        disableButtonsControls
        items={items}
        autoPlay
        autoPlayInterval={2000}
        infinite
        controlsStrategy="alternate"
    />
    </div>
    {/* <HomeVideo/> */}
    
    </div>
    
  )
}

export default Maincrosel