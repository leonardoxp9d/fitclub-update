import React, { useState, useEffect}from 'react'
import './ScrollTopButton.css';
import { Link } from "react-scroll";
import { FaAnglesUp } from 'react-icons/fa6';


const ScrollTopButton = () => {
    const [showBackButton, setShowBackButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const showButtonPosition = 700;
            
            const scrollPosition = window.scrollY;
            
            setShowBackButton(scrollPosition > showButtonPosition);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button 
            className={`scrollTopButton ${showBackButton ? 'visible' : ''}`}
        >
            <Link to="header" smooth={true}>
                <FaAnglesUp/>
            </Link>
        </button>
    )
}

export default ScrollTopButton;