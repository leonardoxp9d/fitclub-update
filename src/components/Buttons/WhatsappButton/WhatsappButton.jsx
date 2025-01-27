import React from 'react'
import './WhatsappButton.css';
import { FaWhatsapp } from "react-icons/fa6";

const WhatsappButton = () => {
    return (
        <button 
            className="whatsappButton"
        >
            <a href="http://wa.me/5521968695409" target='_blank' rel="noopener noreferrer">
                <FaWhatsapp/>
            </a>
        </button>
    )
}

export default WhatsappButton;