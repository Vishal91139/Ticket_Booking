import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate for redirection after logout
import axios from 'axios'; // Import axios for HTTP requests
import '../../public/stylesheets/Navbar.css'; 
import { useAuth } from '../routes/authContext.jsx';


const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  const navigate = useNavigate(); // Hook for navigation after logout

  // Logout handler
  const logoutHandler = async () => {
    try {
      // Send POST request to logout
      const response = await axios.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true });

      // Handle the response, redirect to login page after successful logout
      console.log('Logout successful:', response.data);
      navigate('/'); // Redirect to login page or any other page
    } catch (error) {
      console.error('Logout error:', error.response?.data || error.message);
    }
  };

  return (
    <header className="navBar flex items-end justify-between p-7 fixed top-0 left-0 w-full">
      <div className="logo text-3xl ml-8 text-orange-400">Movie Love</div>
      <div>
        <ul className="navLinks flex space-x-16 text-white ">
          <li><a href="#">Home</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Plays</a></li>
          <li><a href="#">Sports</a></li>
          <li><a href="#">Upcoming</a></li>
        </ul>
      </div>
      <div className="search space-x-4">
        <input className='header-input p-1.5 pl-3 rounded-full'
          type="text"
          placeholder="Search movie"
          aria-label="Search movies"
        />
        {isAuthenticated ? (
          <button className='header-button text-lg bg-orange-400 p-1 px-4 rounded-full hover:bg-orange-500 ' aria-label="Sign up"><Link onClick={logout}>Logout</Link></button>
        ) : (
          <button className='header-button text-lg bg-orange-400 p-1 px-3 rounded-full hover:bg-orange-500 ' aria-label="Sign up"><Link to="/">Sign Up</Link></button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
