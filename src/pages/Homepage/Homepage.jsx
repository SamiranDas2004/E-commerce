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
  <HomesectionCarosol data={MensData}  sectionName={"Men's Shirt"}/>
  <HomesectionCarosol   data={MensData}  sectionName={"Men's Shoes"}/>
  <HomesectionCarosol  data={MensData}  sectionName={"Men's kurta"}/>
  <HomesectionCarosol  data={MensData}  sectionName={"Women Saree"}/>
  <HomesectionCarosol data={MensData}  sectionName={"Women bag"}/>
  <HomesectionCarosol data={MensData}  sectionName={"Women's Ware"}/>
    </div>
    </>
  )
}

export default Homepage