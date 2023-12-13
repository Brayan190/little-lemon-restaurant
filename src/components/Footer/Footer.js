import React from 'react'
import Logo from "../../assets/icons_assets/restauranfood.jpg"
const Footer = () => {
  return (
    <footer>
      <div>
        <img src={Logo} alt='logo' width={300}/>
      </div>
      <div>
        <h1>Doomat Navigation</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Menu</a></li>
          <li><a href="/">Reservation</a></li>
          <li><a href="/">Order Online</a></li>
          <li><a href="/">Login</a></li>
        </ul>
      </div>
      <div>
        <h1>Contact</h1>
        <ul>
          <li><a href="/">Adress</a></li>
          <li><a href="/">Phone number</a></li>
          <li><a href="/">Email</a></li>
        </ul>
      </div>
      <div>
        <h1>Social Media</h1>
        <ul>
          <li><a href="/">Adress</a></li>
          <li><a href="/">Phone number</a></li>
          <li><a href="/">Email</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
