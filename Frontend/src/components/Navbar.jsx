import React from 'react';
import { Link } from 'react-router-dom';
import '../../public/stylesheets/Navbar.css'; 



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Ticket Booking</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/bookings">My Bookings</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
