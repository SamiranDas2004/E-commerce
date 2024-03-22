import React from 'react'
import HomesectionCard from '../HomesectionCard/HomesectionCard';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
function HomesectionCarosol() {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 4 },
    };
    const items=[1,1,1].map((item)=><HomesectionCard/>)
  return (
    
    <AliceCarousel
    mouseTracking
    items={items}
    autoPlay
    responsive={responsive}
    controlsStrategy="alternate"
/>
  )
}

export default HomesectionCarosol