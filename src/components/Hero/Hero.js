import React from 'react';
import "./hero.css";
import Header from '../Header/Header';


function Hero() {
  return (
    <div>
      <div className='Hero'>
        <div className='left-s'>
            <Header />

            <div className='the-best-ad'>
                <div>
                    <span>The Best Fitness Club In The Town</span>
                </div>
            </div>
        </div>
        <div className='right-s'>Right-side</div>
      </div>
    </div>
  );
};

export default Hero;
