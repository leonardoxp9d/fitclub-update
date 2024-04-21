import React from 'react';
import './Reasons.css';
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
import { SiJordan, SiNike,SiPuma } from "react-icons/si";
import { CgAdidas } from "react-icons/cg";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className='left-r'>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      
      <div className='right-r'>
        <span>some reasons</span>

        <div>
          <span className="stroke-text">why</span>
          <span> choose us?</span>
        </div>

        <div className='details-r'>
          <div>
            <img src={tick} alt=""/>
            <span>OVER 140+ EXPERT COACHS</span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>   
        </div>

        <span 
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}  
        >
          OUR PARTNERS
        </span>

        <div className="partners">
          {/*}
          <div className="partner">
            <SiJordan className="partner-logo"/>
            <span className="partner-name">Jordan</span>
          </div> */}

          <div className="partner">
            <SiNike className="partner-logo"/>
            <span className="partner-name">Nike</span>
          </div>

          <div className="partner">
            <CgAdidas className="partner-logo"/>
            <span className="partner-name">Adidas</span>
          </div>

          
          
          <div className="partner">
            <SiPuma className="partner-logo"/>
            <span className="partner-name">Puma</span>
          </div>          
        </div>
      </div>
    </div>
  )
}
export default Reasons;
