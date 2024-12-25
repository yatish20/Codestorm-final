import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About FinLiteracy</h3>
          <p>Empowering individuals with financial knowledge for a secure future.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/modules">Learning Modules</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@finliteracy.com</p>
          <p>Phone: (+91) 8329224544</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 FinLiteracy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;