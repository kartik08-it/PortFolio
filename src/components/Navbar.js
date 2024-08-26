import React from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ onPageChange }) => {
  const [showMenu, setShowMenu] = React.useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Kartik Upadhayay</h1>
      </div>
      <div className="toggle-menu" onClick={handleToggleMenu}>
        <FaBars />
      </div>
      <ul className={showMenu ? 'show' : ''}>
        <li><button onClick={() => { onPageChange('welcome'); handleToggleMenu(); }}>Home</button></li>
        <li><button onClick={() => { onPageChange('about'); handleToggleMenu(); }}>About Me</button></li>
        <li><button onClick={() => { onPageChange('projects'); handleToggleMenu(); }}>Projects</button></li>
        <li><button onClick={() => { onPageChange('contact'); handleToggleMenu(); }}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
