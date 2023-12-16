import React from 'react'
import Logo from "../../assets/icons_assets/Logo.svg"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <div><img src={Logo} alt='Logo'/></div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><Link to="/">Menu</Link></li>
        <li><Link to="/booking">Reservation</Link></li>
        <li><Link to="/">Order Online</Link></li>
        <li><Link to="/">Login</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
