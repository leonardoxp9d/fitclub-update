import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import './Header.css';
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

import { FaFacebookF, FaXTwitter, FaInstagram, FaTiktok } from 'react-icons/fa6';

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="" className='logo'/>
      {menuOpened === false && mobile === true ? (
        <div 
          style={{
            background: "var(--appColor)", 
            padding: ".8rem",
            borderRadius: ".5rem",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img 
            src={Bars} 
            alt="" 
            style={{ width: "2.4rem", height: "2.4rem" }}  
          />
        </div>
      ):(
        <>
        <ul className='header-menu'>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="header"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              span={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              span={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans"
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>

        <ul className='header-social-media'>
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF/>
            </a>
          </li>

          <li>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaXTwitter/>
            </a>
          </li>
          
          <li>
            <a href="https://www.instagram.com/"  target="_blank" rel="noopener noreferrer">
              <FaInstagram/>
            </a>
          </li>
          
          <li>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
              <FaTiktok/>
            </a>
          </li>
        </ul>
        </>
      )
      }
      
    </div>
  )
}

export default Header