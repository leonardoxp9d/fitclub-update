import React from 'react'
import './WhatsappButton.css';
import { FaWhatsapp } from "react-icons/fa6";

const WhatsappButton = () => {
    return (
        <button 
            className="whatsappButton"
        >
            <a href="https://wa.me/5522988665334" target='_blank' rel="noopener noreferrer">
                <FaWhatsapp/>
            </a>
        </button>
    )
}

export default WhatsappButton;