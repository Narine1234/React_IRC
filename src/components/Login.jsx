import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles.css';
import pic from './images/webStep1.png';
import Image from './images/google.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const users = [
    { id: 1, email: 'user1@example.com', password: 'password1' },
    { id: 2, email: 'user2@example.com', password: 'password2' },
    // Add more users as needed
  ];

  const handleLogin = () => {
    setLoading(true);

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      console.log('Login successful!');
      alert('Login successful!');
      // Redirect to the dashboard or another page
      navigate('/dashboard');
    } else {
      console.error('Invalid Email or Password!!!');
      setErrorMessage('Invalid Email or Password!!!');
    }

    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 body11">
      <div className="row border rounded-5 p-3 bg-white shadow box-area">
        <div className="col-12 col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: '#103cbe' }}>
          <div className="featured-image mb-3">
            <img src={pic} className="img-fluid" style={{ maxWidth: '100%', height: 'auto', display: 'block' }} alt="Featured" />
          </div>
          <p className="text-white fs-2 text1" style={{ fontFamily: 'Courier New, Courier, monospace', fontWeight: 600 }}>
            Donating is the greatest act of Grace!!
          </p>
          <small className="text-white text-wrap text-center hide-on-small" style={{ maxWidth: '17rem', fontFamily: 'Courier New, Courier, monospace' }}>
            Thousands Are Raising Funds.
          </small>
          <p className="text-white fs-2" style={{ fontFamily: 'Courier New, Courier, monospace', fontWeight: 600 }}>
            You Can Too!
          </p>
        </div>

        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <div className="header-text mb-4">
              <h2>WeCareForU</h2>
              <h3>Sign IN</h3>
              <p>We are happy to have you back.</p>
            </div>
            <div className="input-group mb-3">
            <input
                type="text"
                className="form-control form-control-lg bg-light fs-6"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group mb-1">
            <input
                type="password"
                className="form-control form-control-lg bg-light fs-6"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
            {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}
            <div className="input-group mb-5 d-flex justify-content-between">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="formCheck" />
                <label htmlFor="formCheck" className="form-check-label text-secondary">
                  <small>Remember Me</small>
                </label>
              </div>
              <div className="forgot">
                <small>
                  <a href="#">Forgot Password?</a>
                </small>
              </div>
            </div>
            <div className="input-group mb-3">
              <button className={`btn btn-lg btn-primary w-100 fs-6 ${loading ? 'disabled' : ''}`} onClick={handleLogin} disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>
            <div className="input-group mb-3">
              <button className="btn btn-lg btn-light w-100 fs-6">
                <img src={Image} style={{ width: '20px' }} className="me-2" alt="Google" />
                <small>Sign In with Google</small>
              </button>
            </div>
            <div className="row">
              <small>
                Don't have an account? <Link to="/register">Sign Up</Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
