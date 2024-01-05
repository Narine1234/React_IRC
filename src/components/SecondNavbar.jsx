// SecondNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const SecondNavbar = ({ backgroundColor }) => {
  return (
    <nav className="second-navbar" style={{ backgroundColor }}>
      <ul>
        <li>
          <Link to="/start-fundraising">Start a Free Fundraising</Link>
        </li>
        <li>
          <Link to="/how-it-works">How It Works</Link>
        </li>
        <li>
          <Link to="/browse-fundraisers">Browse Fundraisers</Link>
        </li>
        <li>
          <Link to="/top-fundraisers">Top Fundraisers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SecondNavbar;
