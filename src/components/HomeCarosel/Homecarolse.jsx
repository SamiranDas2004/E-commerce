import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Maincarosoul } from '../../MaincarouselData/MainCarosouldata.js';

function Maincrosel() {

    const items = Maincarosoul.map((pic)=> <img class="flex justify-center items-center h-screen" width="" src={pic.image}/>)
  return (
    <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        autoPlayInterval={1000}
        infinite
        controlsStrategy="alternate"
    />
  )
}

export default Maincrosel