import React from 'react';
import CaptionGenerator from '../../components/caption/CaptionGenerator';
import './HomePage.css';
import CaptionOptions from '../../components/home/CaptionOptions';


function HomePage() {
  return (
    <div className="body-container-home">
        {/* <div className='item'><CaptionGenerator/></div> */}
        <div className='item'><CaptionOptions/></div>
    </div>
  );
}

export default HomePage;
