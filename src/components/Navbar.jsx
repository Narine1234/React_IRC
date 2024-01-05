import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import SecondNavbar from "./SecondNavbar";
import SideBar from "./SidePanel";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isNavbarVisible = ['/','/about', '/contact'].includes(location.pathname.toLowerCase());

  if (!isNavbarVisible) {
    // Return null or any other content if the navbar should not be visible
    return null;
  }

  return (
    <div>
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
        </ul>
      </nav>
      <SideBar/>
      <SecondNavbar />
    </div>
  );
};

export default Navbar;
