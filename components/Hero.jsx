import React from 'react'
import Carousel from './Carousel'
import Slider from './Slider'
import HeroText from './HeroText'

const Hero = () => {
  return (
    <div className='h-[100vh] flex flex-col'>
        <Slider/>
        <HeroText/>
    </div>
  )
}

export default Hero
