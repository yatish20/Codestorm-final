// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import pfp from './test.jpg'; // Profile picture path
import './Navbar.css';
import LoginForm from './LoginForm'; // Import LoginForm
import SignUpForm from './SignUpForm'; // Import SignUpForm

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  // State for modals
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const location = useLocation();

  const items = [
    { name: 'Home', path: '/' },
    { name: 'Learning Modules', path: '/modules' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Quizes', path: '/quiz' },
    { name: 'Expense Tracker', path: '/expense' },
    { name: 'Calculator', path: '/calculator' },
  ];

  useEffect(() => {
    const currentIndex = items.findIndex(item => item.path === location.pathname);
    setActiveIndex(currentIndex !== -1 ? currentIndex : 0);
  }, [location]);

  const handleItemClick = (index, path) => {
    setActiveIndex(index);
    setIsMenuOpen(false); // Close menu when an item is clicked
  };

  const handleLoginOpen = () => {
    setIsLoginOpen(true);
    setIsProfileMenuOpen(false);
  };

  const handleSignUpOpen = () => {
    setIsSignUpOpen(true);
    setIsProfileMenuOpen(false);
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false);
  };

  const handleSignUpClose = () => {
    setIsSignUpOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg">
      <div className="navbar-brand navbar-logo">FinLiteracy</div>
      <button 
        className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`} 
        type="button" 
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
        aria-expanded={isMenuOpen}
      >
        {/* You can add a hamburger icon here */}
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`navbar-content ${isMenuOpen ? 'show' : ''}`}>
        <ul className="navbar-nav">
          <div className="hori-selector" style={{ top: `${activeIndex * 50}px` }}></div>
          {items.map((item, index) => (
            <li 
              className={`nav-item ${activeIndex === index ? 'active' : ''}`} 
              key={index}
              onClick={() => handleItemClick(index, item.path)}
            >
              <Link to={item.path} className="nav-link">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="profile">
          <img
            src={pfp}
            alt="Profile"
            className="profile-photo"
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
          />
          {isProfileMenuOpen && (
            <ul className="profile-menu">
              <li>
                <button onClick={handleLoginOpen} className="profile-menu-button">Login</button>
              </li>
              <li>
                <button onClick={handleSignUpOpen} className="profile-menu-button">Sign Up</button>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Render sliding menu only in mobile view */}
      {isMenuOpen && window.innerWidth <= 768 && (
        <div className="sliding-menu">
          <ul>
            {items.map((item, index) => (
              <li key={index} onClick={() => handleItemClick(index, item.path)}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mobile-specific profile section */}
      <div className="mobile-only profile">
        <img
          src={pfp}
          alt="Profile"
          className="profile-photo"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="modal-overlay" onClick={handleLoginClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <LoginForm onClose={handleLoginClose} />
          </div>
        </div>
      )}

      {/* SignUp Modal */}
      {isSignUpOpen && (
        <div className="modal-overlay" onClick={handleSignUpClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <SignUpForm onClose={handleSignUpClose} />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
