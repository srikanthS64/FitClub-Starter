import React from 'react';
import "./header.css"; 
import logo from "../../assets/logo.png";


function Header() {
  return (
    <div className='Header'>
      <img className='logo' src={logo} alt=''/>

      <ul className='header-menu'>
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
};

export default Header;
