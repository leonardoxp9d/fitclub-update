import React from 'react'
import './Hero.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import { PiHeartbeatFill } from "react-icons/pi";
import Calories from '../../assets/calories.png';
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      
      {/*<Header/>*/}
      <div className="left-h">
      
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile? "17.8rem" : "23.8rem"}}
            whileInView={{ left: ".8rem" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
            <span>the best fitness club in the town</span>
        </div>

        {/*Hero Heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>

          <div>
            <span>Ideal body</span>
          </div>
          
          <div>
            <span>
              In here we will help you to shape and build your ideal body and live up your life to fullest
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>

          <div>
            <span>
              <NumberCounter end={978} start={100} delay="4" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          
          <div>
            <span>
              <NumberCounter end={50} start={0} delay="4" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">

        <motion.div 
          initial={{ right: "-1.6rem" }}
          whileInView={{ right: "6.4rem" }}
          transition={ transition }
          className='heart-rate'>
          <PiHeartbeatFill aria-label="heart image"/>

          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img src={hero_image} alt="image of a personal trainer" className="hero-image" />

        <motion.img 
          initial={{ right: "17.6rem" }}
          whileInView={{ right: "32rem" }}
          transition={transition}
          src={hero_image_back} 
          alt="image of 2 curved lines" 
          className="hero-image-back" 
        />

        <motion.div
          initial={{ right: "59.2rem" }}
          whileInView={{ right: "44.8rem" }}
          transition={ transition } 
          className="calories">
          <img src={Calories} alt="image of a fictional calorie graph"/>

          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>            
        </motion.div>
      </div>
    </div>
  )
}

export default Hero;