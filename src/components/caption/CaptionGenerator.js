import React from 'react';
import './CaptionGenerator.css';

function CaptionGenerator() {
  return (
    <div>
      <h2>Generate unique captions from scratch</h2>
      <p>Choose the type of post you want a caption for, and let Skipli AI write it for you</p>
      <p>What kind of post do you want a caption for?</p>
      <div className="caption-options-container">
        {/* Facebook option */}
        <div className="caption-option">
          {/* Icon placeholder */}
          <i className="icon-item fab fa-facebook"></i>
          <div>
            <div className='text-title'>Facebook post</div>
            <div>Generate caption for a post</div>
          </div>
        </div>
        {/* Instagram option */}
        <div className="caption-option">
          {/* Icon placeholder */}
          <i className="icon-item fab fa-instagram"></i>
          <div>
            <div className='text-title'>Instagram post</div>
            <div>Generate caption for a post</div>
          </div>
        </div>
        {/* Twitter option */}
        <div className="caption-option">
          {/* Icon placeholder */}
          <i className="icon-item fab fa-twitter"></i>
          <div>
            <div className='text-title'>Twitter post</div>
            <div>Generate caption for a post</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaptionGenerator; 