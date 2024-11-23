import React from 'react';
import { Link } from 'react-router-dom';
import '../../public/stylesheets/HomePage.css'; 


const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to Ticketify</h1>
        <p>Your one-stop platform to book movies, events, and more!</p>
        <button className="cta-button">Explore Now</button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Ticketify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
