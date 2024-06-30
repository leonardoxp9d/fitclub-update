import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logo.png';
import './Header.css';
import { Link } from "react-scroll";

import { FaFacebookF, FaXTwitter, FaInstagram, FaTiktok } from 'react-icons/fa6';

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  const [menuToggle, setMenuToggle] = useState(false);
  const [container, setContainer] = useState(null);

  // Função para lidar com a mudança no estado do checkbox
  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
    if (!menuToggle) {
      container.classList.add('effect-open-menu');
    }else {
      container.classList.remove('effect-open-menu');
    }
  };

  useEffect(() => {
    const containerElement = document.querySelector('.Container');    

    setContainer(containerElement);
  }, []);
 
  return (
    
    <header className="header">
      <img src={Logo} alt="logo written The Fit Club" className="logo"/>
        <nav class="menu">
        <input type="checkbox" className="menu-faketrigger" onClick={handleMenuToggle}></input>
        
          <div className="menu-content">
            <ul className="menu-list">
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

            <ul className="social-media">
              <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF aria-label="facebook button"/>
                </a>
              </li>

              <li>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter aria-label="twitter button"/>
                </a>
              </li>
              
              <li>
                <a href="https://www.instagram.com/"  target="_blank" rel="noopener noreferrer">
                  <FaInstagram aria-label="instagram button"/>
                </a>
              </li>
              
              <li>
                <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                  <FaTiktok aria-label="tiktok button"/>
                </a>
              </li>
            </ul>
          </div>          

          <div class="menu-toggle">
              <span></span>
              <span></span>
              <span></span>
          </div>          
        </nav>
    </header>
  )
}

export default Header;