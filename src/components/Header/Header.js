import React from 'react';
import "./header.css"; 
import logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png"
import { useState } from 'react';

function Header() {

const mobile = window.innerWidth<=768 ? true: false;
const [menuOpened, setMenuopened] = useState(false)

  return (
    <div className='Header'>
      <img className='logo' src={logo} alt=''/>

      {(menuOpened=== false && mobile===true)? (
        <div style={{
          backgroundColor: "var(--appColor)",
          padding: "0.5rem",
          borderRadius: "5px",
        }}
        onClick={() => setMenuopened(true)}
        >
          <img src={Bars} alt='' style={{width:'1.5rem', height:'1.5rem'}}/>
        </div>
      ):(
      <ul className='header-menu'>
        <li onClick={() => setMenuopened(false)}>Home</li>
        <li onClick={() => setMenuopened(false)}>Programs</li>
        <li onClick={() => setMenuopened(false)}>Why us</li>
        <li onClick={() => setMenuopened(false)}>Plans</li>
        <li onClick={() => setMenuopened(false)}>Testimonials</li>
      </ul>
      )}
    </div>
  );
};

export default Header;
