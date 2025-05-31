import React from 'react';
import './SideBar.css';
import { NavLink } from 'react-router-dom';
import config from '../../config';

function SideBar() {
  return (
    <div className="sidebar-container">
      <h1>Skipli AI</h1>
      <div className='container-sidebar'>
        <NavLink to={config.Routes.login} className={({ isActive }) => isActive ? 'item-sidebar active' : 'item-sidebar'}> <span><i class="icon-sidebar fa-solid fa-dice-four"></i></span><span>Services</span></NavLink>
        <NavLink to={config.Routes.login} className={({ isActive }) => isActive ? 'item-sidebar active' : 'item-sidebar'}> <span><i class="icon-sidebar fa-regular fa-user icon-user"></i></span><span>Profile</span></NavLink>
      </div>
    </div>
  );
}

export default SideBar;
