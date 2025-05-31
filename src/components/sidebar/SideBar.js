import React from 'react';
import './SideBar.css';
import { NavLink } from 'react-router-dom';
import config from '../../config';

function SideBar() {
  return (
    <div className="sidebar-container">
      <h1>Skipli AI</h1>
      <div className='container-sidebar'>
        <div className="item-sidebar"> <span><i class="icon-sidebar fa-solid fa-dice-four"></i></span><span>Services</span></div>
        <div  className="item-sidebar"> <span><i class="icon-sidebar fa-regular fa-user icon-user"></i></span><span>Profile</span></div>
      </div>
    </div>
  );
}

export default SideBar;
