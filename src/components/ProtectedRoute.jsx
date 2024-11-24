// src/components/ProtectedRoute.jsx
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from 'src/context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
