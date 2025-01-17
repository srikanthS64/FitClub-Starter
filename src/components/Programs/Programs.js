import React from 'react';
import "./programs.css";
import {programsData} from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className='programs' id='programs'>
      {/* header- section */}
      <div className='programs-header'>
        <span className='stroke-text'>EXPLORE OUR</span>
        <span>PROGRAMS</span>
        <span className='stroke-text'>TO SHAPE YOU</span>
      </div>

      <div className='program-categories'>
        {programsData.map((program) => (
          <div className='category'>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className='join-now'><span>join Now</span><img src={RightArrow} alt='RightArrow'/></div>
          </div> 
        ))} 
      </div>
    </div>
  );
};

export default Programs;
