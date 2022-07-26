import React from 'react'
import Image from '../../assets/back.jpg'
import HeroText from './HeroText'

import './Hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
    <div id="background">
      <img src={Image} alt="" />
    </div>
    <div className="hero-container">
      <HeroText />
     
    </div>
    </div>
  )
}

export default Hero