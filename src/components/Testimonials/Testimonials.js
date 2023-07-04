import React from 'react';
import"./testimonials.css"
import { testimonialsData } from '../../data/testimonialsData';


const Testimonials = () => {
  return (
    <div className='Testimonials'>
      <div className='left-t'>
        <span>TESTIMONIALS</span>
        <span className='stroke-text'>WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <span>
            {testimonialsData[0].review}
        </span>
      </div>
      <div className='right-t'></div>
    </div>
  );
};

export default Testimonials;
