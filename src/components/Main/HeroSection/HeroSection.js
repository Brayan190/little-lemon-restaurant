import React from 'react'
import  Restaurant from '../../../assets/icons_assets/restaurant.jpg'
const HeroSection = () => {
  return (
    <div>
      <h1>Little Lemon</h1>
<h2>Chicago</h2>
<p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
  <div>
    <img src={Restaurant} alt='restaurant' width={300} />
  </div>
    </div>
  )
}

export default HeroSection
