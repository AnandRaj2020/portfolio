import React from 'react';
import './navbar.css';
import {Link} from 'react-scroll';
const Navbar = () =>{
  return (
    <div>
      <nav className='navbar'>
        <img src="logo.png" alt="Logo" className='logo'></img>
        <div className="desktopMenu">

            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Portfolio</Link>
            <Link className="desktopMenuListItem">Client</Link>

        </div>
        <button className="desktopMenuBtn">
            <img src="contact.png" alt="" className="desktopMenuImg" />Contact Me
        </button>

      </nav>
    </div>
  )
}

export default Navbar;

