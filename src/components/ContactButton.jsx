// ContactButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';

import '../App.css';

const ContactButton = () => {
  return (
    <Link to="/contact" className="contact-button">
      <PhoneIcon style={{ marginRight: '4px' }} />
      Contact Us
    </Link>
  );
};

export default ContactButton;
