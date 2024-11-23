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
    <nav className="navbar">
      <div className="logo">Ticket Booking</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/bookings">My Bookings</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        {/* Instead of Link, use the logout handler */}
        {isAuthenticated ? (
          <li><Link onClick={logout}>Logout</Link></li>
        ) : (
          <li><Link to="/">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
