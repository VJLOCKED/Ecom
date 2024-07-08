// Sidebar.tsx
import React from 'react';
import './Style.css';

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className="sidebar-container">
      <nav className="navbar">
        <div className="logo">
          <a href="/">
            <svg
              width="100"
              height="50"
              viewBox="0 0 200 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text x="0" y="35" fill="white" fontSize="35" fontFamily="Arial">
                Flopcart
              </text>
            </svg>
          </a>
        </div>
        <div className="nav-links">
          {/* Add links here */}
        </div>
        {!isSidebarOpen ? (
          <div className="hamburger" onClick={toggleSidebar}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        ) : (
          <div className="close-icon" onClick={toggleSidebar}>
            X
          </div>
        )}
      </nav>

      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleSidebar}>
          X
        </button>
        <ul className="sidebar-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">Account</a>
          </li>
          <li>
            <a href="/">Settings</a>
          </li>
        </ul>
      </aside>
      <div
        className={`overlay ${isSidebarOpen ? 'open' : ''}`}
        onClick={toggleSidebar}
      ></div>
    </div>
  );
};

export default Sidebar;
