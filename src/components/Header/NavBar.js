import React, { useState } from 'react'
import Logo from "../../assets/icons_assets/Logo.svg"
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [onOpen, setOnOpen] = useState(false)

  const toggleNavBar = () => {
setOnOpen(!onOpen)
  }
const stylenav = onOpen ?{display:"none"} :{};
  return (
    <nav>
      <div className="nav-mobile">
        <button onClick={toggleNavBar} ><GiHamburgerMenu /></button>
        <div className='navbar-mobile' style={stylenav}>
          <button onClick={toggleNavBar}><IoMdClose /></button>       
           <li onClick={toggleNavBar}><Link to="/" >Home</Link></li>
          <li onClick={toggleNavBar}><a href="#about">About</a></li>
          <li onClick={toggleNavBar}><Link to="/">Menu</Link></li>
          <li onClick={toggleNavBar}><Link to="/booking">Reservation</Link></li>
          <li onClick={toggleNavBar}><Link to="/">Order Online</Link></li>
          <li onClick={toggleNavBar}><Link to="/">Login</Link></li>
        </div>
      </div>
      <div><img src={Logo} alt='Logo' /></div>
      <div className="nav-mobile">
        <button><FaCartPlus /></button>
      </div>
      <div className='navbar'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About</a></li>
          <li><Link to="/">Menu</Link></li>
          <li><Link to="/booking">Reservation</Link></li>
          <li><Link to="/">Order Online</Link></li>
          <li><Link to="/">Login</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
