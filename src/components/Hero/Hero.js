import React from 'react';
import "./hero.css";
import Header from '../Header/Header';
import hero_image from "../../assets/hero_image";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";


function Hero() {
  return (
    <div>
      <div className='Hero'>
        <div className='left-s'>
            <Header />

            {/* the best ad */}
            <div className='the-best-ad'>
                <div></div>
                <span>The Best Fitness Club In The Town</span>
            </div>

            {/* Hero Heading*/}
            <div className='hero-text'>
              <div>
                <span className='stroke-text'>shape </span>
                <span>Your</span>
              </div>
              <div><span>Ideal Body</span></div>
              <div> <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
              </div>
            </div>

             {/*figures */}
              <div className='figures'>
              <div>
                <span>+ 140</span>
                <span>EXPERT COACHES</span>
              </div>
              <div>
                <span>+ 978</span>
                <span>MEMBERS JOINED</span>
              </div>
              <div>
               <span>+ 50</span>
               <span>FITNESS PROGRAMS</span>
              </div>
             </div>

             {/* HERO-BUTTON */}

             <div className='hero-btn'>
              <button className='btn'>Get Started</button>
              <button className='btn'>Learn More</button>
             </div>
          </div>
        <div className='right-s'>Right-side</div>
      </div>
    </div>
  );
};

export default Hero;
