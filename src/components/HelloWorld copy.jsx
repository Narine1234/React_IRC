import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests
import '../styles.css';
import pic from './images/webStep1.png';

function HelloWorld() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [fundraisingFor, setFundraisingFor] = useState('');
  const [raisedFundsFor, setRaisedFundsFor] = useState('');
  const [idProof, setIdProof] = useState('');
  const [idProofImage, setIdProofImage] = useState(null);

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleFundraisingForChange = (e) => {
    setFundraisingFor(e.target.value);
  };

  const handleRaisedFundsForChange = (e) => {
    setRaisedFundsFor(e.target.value);
  };

  const handleIdProofChange = (e) => {
    setIdProof(e.target.value);
  };

  const handleIdProofImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setIdProofImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignUp = async () => {
    try {
      // Validate password and confirm password match
      if (password !== confirmPassword) {
        alert('Password and Confirm Password do not match');
        return;
      }

      // Create a user object with the details
      const user = {
        fullName,
        email,
        password,
        userType,
        fundraisingFor,
        raisedFundsFor,
        idProof,
        idProofImage,
      };

      // Make a POST request to your backend API to handle registration
      const response = await axios.post('YOUR_BACKEND_API_ENDPOINT/register', user);

      // Handle the response, e.g., show a success message or redirect to login page
      console.log(response.data);
      window.location.href = '/login';
      // Now, you can use the same user details for login
    } catch (error) {
      console.error('Error during registration:', error.message);
      // Handle the error, e.g., show an error message to the user
    }
  };

  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center min-vh-100 body1">
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: '#103cbe' }}>
            <div className="featured-image mb-3">
              <img src={pic} className="img-fluid" style={{ width: '250px' }} alt="Featured" />
            </div>
            <p className="text-white fs-2 text1" style={{ fontFamily: 'Courier New, Courier, monospace', fontWeight: 600 }}>
                More Trustable CrowdFunding Platform!!! 
            </p>
            <small className="text-white text-wrap text-center" style={{ width: '17rem', fontFamily: 'Courier New, Courier, monospace' }}>
              Join the Community to help the poor!.
            </small>
          </div>

          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2>WeCareForU</h2>

                <h3>Sign UP</h3>
                <p>We are excited to welcome you!</p>
              </div>
              <div className="input-group mb-3">
                <input type="text" className="custom-input" placeholder="Full Name" />
              </div>
              <div className="input-group mb-3">
                <input type="text" className="custom-input" placeholder="Email Address" />
              </div>
              <div className="input-group mb-3">
                <input type="password" value={password} onChange={handlePasswordChange} className="custom-input" placeholder="Set Password" />
              </div>
              <div className="input-group mb-3">
                <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} className="custom-input" placeholder="Confirm Password" />
              </div>
              <div className="input-group mb-3">
                <label>
                  <input type="radio" name="userType" value="donor" checked={userType === 'donor'} onChange={handleUserTypeChange} /> Donor
                </label>
                <label style={{ marginLeft: '20px' }}>
                  <input type="radio" name="userType" value="receiver" checked={userType === 'receiver'} onChange={handleUserTypeChange} /> Receiver
                </label>
              </div>
              {userType === 'receiver' && (
                <div>
                  <div className="input-group mb-3">
                    <label>Im raising funds for:</label>
                    <select className="custom-input" onChange={handleFundraisingForChange} value={fundraisingFor}>
                      <option value="">Select...</option>
                      <option value="medical">Medical</option>
                      <option value="nonProfit">Non Profit</option>
                    </select>
                  </div>
                  <div className="input-group mb-3">
                    <label>The raised funds will help for:</label>
                    <select className="custom-input" onChange={handleRaisedFundsForChange} value={raisedFundsFor}>
                      <option value="">Select...</option>
                      <option value="myself">Myself</option>
                      <option value="spouse">Spouse</option>
                      <option value="family">Family</option>
                      <option value="child">Child</option>
                      <option value="others">Others</option>
                    </select>

                  </div>
                </div>
              )}
              <div className="input-group mb-3">
                <label>ID Proof:</label>
                <select className="custom-input" onChange={handleIdProofChange} value={idProof}>
                  <option value="">Select...</option>
                  <option value="aadhar">Aadhar</option>
                  <option value="drivingLicense">Driving License</option>
                  <option value="passport">Passport</option>
                </select>
              </div>
              <div className="input-group mb-3">
                <label>Upload ID Proof Image:</label>
                <input type="file" accept="image/*" onChange={handleIdProofImageChange} />
                {idProofImage && <img src={idProofImage} alt="ID Proof" style={{ maxWidth: '100px', marginTop: '10px' }} />}
              </div>
              <div className="input-group mb-1">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="formCheck" />
                  <label htmlFor="formCheck" className="form-check-label text-secondary">
                    <small>Agree to Terms</small>
                  </label>
                </div>
              </div>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-primary w-100 fs-6">Sign Up</button>
              </div>
              <div className="row">
                <small>Already have an account? <Link to="/">Login</Link></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelloWorld;
