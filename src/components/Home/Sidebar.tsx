//adding cart count 
import React from 'react';
import './Style.css';
import Categories from './Categories';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  cartItemCount: number; // Prop for cart item count
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar, cartItemCount }) => {
  return (
    <div className="sidebar-container">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <svg
              width="100"
              height="50"
              viewBox="0 0 200 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text x="0" y="35" fill="black" fontSize="35" fontFamily="Arial">
                Flopcart
              </text>
            </svg>
          </Link>
        </div>
        <div className="nav-links">
          <Categories />
          <SearchBar />
          <Link to="/cart">
            <div className="cart-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="cart-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.68 6.72a1 1 0 001.1 1.28h10.16a1 1 0 001.1-1.28L17 13M7 13h10m-4 4a1 1 0 110 2 1 1 0 010-2z"
                />
              </svg>
              {cartItemCount > 0 && (
                <span className="cart-count">{cartItemCount}</span> // Display cart item count
              )}
            </div>
          </Link>
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
      <div className={`overlay ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}></div>
    </div>
  );
};

export default Sidebar;


// import React from 'react';
// import './Style.css';
// import Categories from './Categories';
// import SearchBar from './SearchBar';
// import { Link } from 'react-router-dom';

// interface SidebarProps {
//   isSidebarOpen: boolean;
//   toggleSidebar: () => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar}) => {
//   return (
//     <div className="sidebar-container">
//       <nav className="navbar">
//         <div className="logo">
//           <Link to="/">
//             <svg
//               width="100"
//               height="50"
//               viewBox="0 0 200 50"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <text x="0" y="35" fill="black" fontSize="35" fontFamily="Arial">
//                 Flopcart
//               </text>
//             </svg>
//           </Link>
//         </div>
//         <div className="nav-links">
//           <Categories />
//           <SearchBar />
//           <Link to="/cart">
//             <div className="cart-button">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 className="cart-icon"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.68 6.72a1 1 0 001.1 1.28h10.16a1 1 0 001.1-1.28L17 13M7 13h10m-4 4a1 1 0 110 2 1 1 0 010-2z"
//                 />
//               </svg>
//             </div>
//           </Link>
//         </div>
//         {!isSidebarOpen ? (
//           <div className="hamburger" onClick={toggleSidebar}>
//             <div className="bar"></div>
//             <div className="bar"></div>
//             <div className="bar"></div>
//           </div>
//         ) : (
//           <div className="close-icon" onClick={toggleSidebar}>
//             X
//           </div>
//         )}
//       </nav>

//       <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
//         <button className="close-button" onClick={toggleSidebar}>
//           X
//         </button>
//         <ul className="sidebar-links">
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/">About us</a>
//           </li>
//           <li>
//             <a href="/">Account</a>
//           </li>
//           <li>
//             <a href="/">Settings</a>
//           </li>
//         </ul>
//       </aside>
//       <div className={`overlay ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}></div>
//     </div>
//   );
// };

// export default Sidebar;

