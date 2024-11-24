// import axios from 'axios';
// import PropTypes from 'prop-types';
// import React, { useMemo, useState, createContext } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // Function to handle user login
//   const login = async (email, password) => {
//     try {
//       const response = await axios.post('http://127.0.0.1:5000/login', { email, password });
//       if (response.status === 200) {
//         const { access_token } = response.data;
//         localStorage.setItem('access_token', access_token);
//         setUser({ email });
//       } else {
//         throw new Error('Login failed');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       throw error; // Propagate the error to be handled in the component
//     }
//   };

//   // Function to handle user logout
//   const logout = async () => {
//     try {
//       const token = localStorage.getItem('access_token'); // Retrieve token from local storage

//       await axios.post(
//         'http://127.0.0.1:5000/logout',
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Include token in Authorization header
//           },
//           withCredentials: true, // Ensure cookies are sent with the request if applicable
//         }
//       );

//       localStorage.removeItem('access_token'); // Remove token from local storage
//       setUser(null); // Clear user state
//     } catch (error) {
//       console.error('Error logging out:', error);
//     }
//   };

//   // Use useMemo to memoize the context value
//   const contextValue = useMemo(() => ({ user, login, logout }), [user]);

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Define PropTypes for AuthProvider
// AuthProvider.propTypes = {
//   children: PropTypes.node.isRequired, // Validate that children is a React node
// };

import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useMemo, useState, createContext } from 'react';
import { API_BASE_URL } from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [moneyHubUserId, setMoneyHubUserId] = useState(null); // New state for MoneyHub user ID

  // Function to handle user login
  const login = async (email, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
      if (response.status === 200) {
        const { access_token } = response.data;
        localStorage.setItem('access_token', access_token);
        setUser({ email });
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      throw error; // Propagate the error to be handled in the component
    }
  };

  // Function to handle user logout
  const logout = async () => {
    try {
      const token = localStorage.getItem('access_token'); // Retrieve token from local storage

      await axios.post(
        `${API_BASE_URL}/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in Authorization header
          },
          withCredentials: true, // Ensure cookies are sent with the request if applicable
        }
      );

      localStorage.removeItem('access_token'); // Remove token from local storage
      setUser(null); // Clear user state
      setMoneyHubUserId(null); // Clear MoneyHub user ID state
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // Function to check or create MoneyHub user and set MoneyHub user ID
  const checkOrCreateMoneyHubUser = async () => {
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        throw new Error('No access token found');
      }

      const response = await axios.post(
        `${API_BASE_URL}/check-or-create-user-on-moneyhub`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        const { user: moneyHubUser } = response.data;
        setMoneyHubUserId(moneyHubUser.userId);
        return moneyHubUser.userId; // Return the MoneyHub user ID
      }
      throw new Error('Failed to check or create MoneyHub user');
    } catch (error) {
      console.error('Error checking or creating MoneyHub user:', error);
      throw error; // Propagate the error to be handled in the component
    }
  };

  // Use useMemo to memoize the context value
  const contextValue = useMemo(
    () => ({
      user,
      moneyHubUserId,
      login,
      logout,
      checkOrCreateMoneyHubUser,
    }),
    [user, moneyHubUserId]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

// Define PropTypes for AuthProvider
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a React node
};
