import React from 'react';
import "./hero.css";
import Header from '../Header/Header';
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import hero_image from "../../assets/hero_image.png";


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

          {/* RIGHT SIDE */}
        <div className='right-s'>
          <button className='button'>Join Now</button>


          <div className='heart-rate'>
            <img src={heart} alt=''/>
            <span>Heart Rate</span>
            <span>116bpm</span>
          </div>

          {/*hero section */}
          <img src={hero_image} alt='' className='hero-img'/>
          <img src={hero_image_back} alt='' className='hero-img-back'/>

          {/*calories */}
          <div className='calories'>
            <img src={calories} alt=''/>
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
