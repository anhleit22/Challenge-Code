import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './SideBar.css';
import { useLogin } from '../../LoginProvider';

function SideBar() {
  const { user } = useLogin();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="sidebar-container">
      <h1>Skipli AI</h1>
      {user && (
        <div className="container-sidebar">
          <Link
            to="/"
            className={`item-sidebar ${currentPath === '/' ? 'active' : ''}`}
          >
            <span><i className="icon-sidebar fa-solid fa-dice-four"></i></span>
            <span>Services</span>
          </Link>

          <Link
            to="/profile"
            className={`item-sidebar ${currentPath === '/profile' ? 'active' : ''}`}
          >
            <span><i className="icon-sidebar fa-regular fa-user icon-user"></i></span>
            <span>Profile</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default SideBar;
