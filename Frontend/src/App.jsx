import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import MoviesPage from './components/MoviesPage';
import EventsPage from './components/EventsPage';
import BookingsPage from './components/BookingsPage';
import ProfilePage from './components/ProfilePage';
import Navbar from './components/Navbar';
import { AuthProvider } from './routes/authContext'; // Import your AuthContext
import ProtectedRoute from './routes/ProtectedRoute'; // Import ProtectedRoute

const App = () => {
  
  return (
    <>
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          
          {/* Wrap protected routes with ProtectedRoute */}
          <Route path="/home" element={<ProtectedRoute element={<HomePage />} />} />
          <Route path="/movies" element={<ProtectedRoute element={<MoviesPage />} />} />
          <Route path="/events" element={<ProtectedRoute element={<EventsPage />} />} />
          <Route path="/bookings" element={<ProtectedRoute element={<BookingsPage />} />} />
          <Route path="/profile" element={<ProtectedRoute element={<ProfilePage />} />} />
        </Routes>
      </Router>
    </AuthProvider>
    </>
  );
};

export default App;
