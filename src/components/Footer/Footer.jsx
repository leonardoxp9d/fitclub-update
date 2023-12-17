import React from 'react';
import './Footer.css';
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";


import { FaFacebookF, FaXTwitter, FaInstagram, FaTiktok } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className="Footer-container">
            <hr/>
            <div className="footer">
                <div className="footer-social-media">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF/>
                    </a>

                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter/>
                    </a>
                    
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram/>
                    </a>
                    
                    <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                        <FaTiktok/>
                    </a>
                </div>    
                <div className="logo-f">
                    <Link to="header" smooth={true}>
                        <img src={Logo} alt="fitclub logo"/>
                    </Link>
                </div>           
            </div>

            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
        </div>
    )
}

export default Footer;