import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import axios from "axios";
import "../../public/stylesheets/LoginPage.css"; // Assuming you have styles here
import { useAuth } from '../routes/authContext'; 

const LoginPage = () => {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPswd, setSignupPswd] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPswd, setLoginPswd] = useState("");
  const [message, setMessage] = useState(""); // State to hold success/error message
  const navigate = useNavigate(); // Initialize navigate for redirection
  const { login } = useAuth(); 
  // Sign up handler
  const signupHandler = async (e) => {
    e.preventDefault(); // Prevent page reload
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          email: signupEmail,
          password: signupPswd,
        }
      );
      setMessage("Signup successful! Please log in to proceed."); // Set success message
      setSignupEmail("");
      setSignupPswd("");
    } catch (error) {
      setMessage(error.response?.data?.message || "Signup failed!"); // Set error message
    }
  };

  // Login handler
  const loginHandler = async (e) => {
    e.preventDefault(); // Prevent page reload
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: loginEmail,
          password: loginPswd,
        },
        { withCredentials: true }
      );
      // console.log(response.status)
      if (response.status == 200) {
        setMessage("Login successful! Redirecting to home page...");
        login(); // Set authentication status to true
        navigate("/home"); // Redirect to Home page after successful login
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed!"); // Set error message
    }
  };

  return (
    <div className="main1">
    <div className="main2">
      <input type="checkbox" id="chk" aria-hidden="true" />

      {/* Display Success/Error Message */}
      {message && <p className="message">{message}</p>}

      {/* Sign Up Form */}
      <div className="signup">
        <form onSubmit={signupHandler}>
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input 
            className="signInput"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input 
            className="signInput" 
            value={signupPswd}
            onChange={(e) => setSignupPswd(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button className="signButton" type="submit">Sign up</button>
        </form>
      </div>

      {/* Login Form */}
      <div className="login">
        <form onSubmit={loginHandler}>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input 
            className="signInput"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input 
            className="signInput"
            value={loginPswd}
            onChange={(e) => setLoginPswd(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button className="signButton" type="submit">Login</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
