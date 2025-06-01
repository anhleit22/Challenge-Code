import React from 'react';
import './SideBar.css';
import { useLogin } from '../../LoginProvider';

function SideBar() {
  const { user } = useLogin();
  return (
    <div className="sidebar-container">
      <h1>Skipli AI</h1>
      {user && (
      <div className='container-sidebar'>
        <div className="item-sidebar"> <span><i class="icon-sidebar fa-solid fa-dice-four"></i></span><span>Services</span></div>
        <div  className="item-sidebar"> <span><i class="icon-sidebar fa-regular fa-user icon-user"></i></span><span>Profile</span></div>
      </div>
      )}
    </div>
  );
}

export default SideBar;
