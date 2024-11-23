// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './authContext'; // Import your Auth Context

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();  // Assuming useAuth provides the isAuthenticated status
  if (!isAuthenticated) {
    return <Navigate to="/" />;  // Redirect to login if not authenticated
  }

  return element;  // Render the component if authenticated
};

export default ProtectedRoute;
