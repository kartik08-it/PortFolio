import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaMedium,FaMobileAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        {/* <h2>Contact</h2> */}
        <a href="mailto:kartiku03@gmail.com">kartiku03@gmail.com</a><br/>       
      </div>
      <div className="footer-center">
      <p>&copy; 2023 </p>
      <p>Made with love</p>
      </div>
      <div className="footer-right">
      <a href="https://github.com/kartik08-it" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24}/>
        </a>
        <a href="https://www.linkedin.com/in/kartik-upadhayay-77b722148/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24}/>
        </a>
        <a href="https://medium.com/@kartiku03" target="_blank" rel="noopener noreferrer">
          <FaMedium size={24}/>
        </a>
        <a href="https://www.instagram.com/im_kartik_gaur/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24}/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;