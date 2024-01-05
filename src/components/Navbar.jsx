import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import SecondNavbar from "./SecondNavbar";
import SideBar from "./SidePanel";
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from './ThemeContext';

const Navbar = () => {
  const themeContext = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isNavbarVisible = ['/','/about', '/contact'].includes(location.pathname.toLowerCase());

  if (!isNavbarVisible) {
    // Return null or any other content if the navbar should not be visible
    return null;
  }

  const handleToggleTheme = () => {
    themeContext.toggleTheme();
  };
  const iconButtonStyles = {
    color: '#848484',
  };

  const themeStyles = {
    backgroundColor: themeContext.theme === 'light' ? '#ffffff' : '#333333',
    color: themeContext.theme === 'light' ? '#000000' : '#ffffff',
    // Add more styles as needed
  };

  return (
    <div style={themeStyles}>
      <nav className="nav">
        <Link to="/" className="title">
          WeCareForYou
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
          <IconButton style={iconButtonStyles} onClick={handleToggleTheme}>
        {themeContext.theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
          </li>
        </ul>
      </nav>
      <SideBar/>
      <SecondNavbar />
    </div>
  );
};

export default Navbar;
