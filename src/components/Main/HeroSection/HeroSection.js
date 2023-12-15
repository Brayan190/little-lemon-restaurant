import React from 'react'
import Restaurant from '../../../assets/icons_assets/restauranfood.jpg'
const HeroSection = () => {
  return (
    <div className='hero_section' >
      <div className='hero_bg'></div>
      <div className='hero_text' >
        <h1 >Little Lemon</h1>
        <h2>Chicago</h2>
        <p >We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
     <button>Reserve table</button>
      </div>
      <div className='hero_image'>
        <img src={Restaurant} alt='restaurant' width={300}/>
      </div>
    </div>
  )
}

export default HeroSection
