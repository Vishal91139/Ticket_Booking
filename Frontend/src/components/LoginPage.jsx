import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';

const LoginPage = () => {
  const [signupEmail, setsignupEmail] = useState('');
  const [signupPswd, setsignupPswd] = useState('');
  const [loginEmail, setloginEmail] = useState('');
  const [loginPswd, setloginPswd] = useState('');

  // Sign up handler
  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        email: signupEmail,
        password: signupPswd,
      });
      console.log('Signup successful:', response);
    } catch (error) {
      console.error('Signup error:', error.response?.data || error.message);
    }
  };

  // Login handler
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: loginEmail,
        password: loginPswd,
      });
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
    }
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      {/* Sign Up Form */}
      <div className="signup">
        <form onSubmit={signupHandler}>
          <label htmlFor="chk" aria-hidden="true">Sign up</label>
          <input
            value={signupEmail}
            onChange={(e) => setsignupEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            value={signupPswd}
            onChange={(e) => setsignupPswd(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button type="submit">Sign up</button>
        </form>
      </div>

      {/* Login Form */}
      <div className="login">
        <form onSubmit={loginHandler}>
          <label htmlFor="chk" aria-hidden="true">Login</label>
          <input
            value={loginEmail}
            onChange={(e) => setloginEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            value={loginPswd}
            onChange={(e) => setloginPswd(e.target.value)}
            type="password"
            name="pswd"
            placeholder="Password"
            required
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
