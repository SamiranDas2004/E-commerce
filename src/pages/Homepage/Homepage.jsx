import React from 'react'
import { MensData } from '../../Data/mens'
import HomesectionCarosol from '../../components/Homesectioncarosol/HomesectionCarosol'
import Maincrosel from '../../components/HomeCarosel/Homecarolse'
function Homepage() {
  return (
    <>
    <div>
       <Maincrosel/>
    </div>
    <div className=' space-y-10 py-10 flex flex-col justify-center px-5 lg:px-10'>
  <HomesectionCarosol data={MensData}/>
  <HomesectionCarosol/>
  <HomesectionCarosol/>
  <HomesectionCarosol/>
  <HomesectionCarosol/>
  <HomesectionCarosol/>
    </div>
    </>
  )
}

export default Homepage