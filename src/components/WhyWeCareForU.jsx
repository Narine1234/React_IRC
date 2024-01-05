import React from 'react';
import './WhyWeCareForU.css'; // Import your CSS file for styling
import pic from './Dedicated.gif';
import image from './SimpleSetup.gif';

import image1 from './Smart.gif';
import image2 from './Safety.gif';
import image3 from './6416402.gif';
const WhyWeCareForU = () => {
  return (
    <div class="card-container">
  <div class="card">
    <div class="card-icon">
      <img src={pic} alt="Icon" />
    </div>
    <div class="card-content">
          <h3>Dedicated Manager</h3>
          <p>
            Dedicated relationship manager to address all your fundraising needs. Receive help and support anytime, anywhere.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-icon">
          <img src={image}alt="Simple Setup" />
        </div>
        <div className="card-content">
        <h3>Simple Setup</h3>
          <p>
            Set up your fundraiser effortlessly, in 3 simple steps.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-icon">
          <img src={image1}alt="Smart Dashboard" />
        </div>
        <div className="card-content">
        <h3>Smart Dashboard</h3>
          <p>
            Manage all your fundraiser details (withdrawals, donations, receipts, and much more) with the interactive dashboard.
          </p>
        </div>
      </div>
      <div class="card">
    <div class="card-icon">
      <img src={image2} alt="Icon 5" />
    </div>
    <div class="card-content">
      <h3>Safety and security</h3>
      <p>
        The most secure encryption technology to keep your funds safe.
      </p>
    </div>
  </div>

  <div class="card">
    <div class="card-icon">
      <img src={image3} alt="Icon 6" />
    </div>
    <div class="card-content">
      <h3>24X7 Expert support</h3>
      <p>
        Expert support at your service, whenever you need.
      </p>
    </div>
  </div>

      {/* Repeat the same structure for other cards... */}
    </div>
  );
}

export default WhyWeCareForU;
