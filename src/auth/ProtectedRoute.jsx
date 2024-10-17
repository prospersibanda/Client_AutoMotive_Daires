import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Check if the user is logged in

  if (!isLoggedIn) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  return children; // Render the component if authenticated
};

export default ProtectedRoute;
