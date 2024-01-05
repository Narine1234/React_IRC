// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/terms-and-conditions">Terms and Conditions</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        {/* Add more social icons as needed */}
      </div>
      <div className="copyright">
        &copy; 2023 Your Company Name. All Rights Reserved.
      </div>
      <div className="contact">
        <p>Email: contact@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
    </footer>
  );
};

export default Footer;
