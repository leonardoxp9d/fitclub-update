import React, { useState, useEffect, useCallback} from 'react';
import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  const backTestimonials = useCallback(() => {
    setSelected((prev) => (prev === 0 ? tLength - 1 : prev - 1));
  },[tLength]);

  const nextTestimonials = useCallback(() => {
    setSelected((prev) => (prev === tLength - 1 ? 0 : prev + 1));
  },[tLength]);

  useEffect(() => {
    const timerId = setInterval(() => {
      nextTestimonials();
    }, 5000);

    return () => {
      clearInterval(timerId);
    };
  }, [selected]);

  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
       
        <span className="stroke-text">What they</span>

        <span>say about us</span>

        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>

        <span >
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
            - {testimonialsData[selected].status}
        </span>
      </div>
      
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        />

        <div className="arrows">
          <IoIosArrowBack onClick={backTestimonials} aria-label="back testimonials button"/>
          <IoIosArrowForward onClick={nextTestimonials} aria-label="next testimonials button"/>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;