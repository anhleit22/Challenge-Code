import React from 'react';
import './CaptionOptions.css';
import { Link } from 'react-router-dom';
import config from '../../config';

export default function CaptionOptions() {
  return (
    <div className="caption-wrapper">
      <div className="caption-container">
        <h2 className="caption-title">
          Generate post ideas and captions in seconds
        </h2>

        <div className="caption-buttons">
          <Link className='link-item' to={config.Routes.caption} >
          <button className="caption-card">
            <div className="caption-heading">Start from scratch</div>
            <div className="caption-subtext">
              Generate new captions to engage, delight, or sell
            </div>
          </button>
          </Link>
          <Link className='link-item' to={config.Routes.caption} >
          <button className="caption-card">
            <div className="caption-heading">Get inspired</div>
            <div className="caption-subtext">
              Generate post ideas and captions for a topic
            </div>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
