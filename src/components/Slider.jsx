import React, { useState } from 'react';
import './Slider.css';
import plan01 from "../assets/images/plan01.jpg";
import plan02 from "../assets/images/plan02.jpg";
import plan03 from "../assets/images/plan03.jpg";

export default function Slider() {
  const images = [plan01, plan02, plan03];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="slider-container" 
         onMouseEnter={() => nextSlide()} 
         onMouseLeave={() => prevSlide()}>
      <img src={images[current]} alt="plan" className="img-fluid rounded"/>
    </div>
  );
}
