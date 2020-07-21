import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Initate UserContext
// Set context to default fallback value
const UserContext = createContext({ auth: false, data: {} });

// Create function to provide UserContext
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ auth: false, data: {} });

  const getMe = async () => {
    try {
      const { data } = await axios.get('/api/v1/auth/me');

      setUser({
        auth: data.success,
        data: data.data,
      });
    } catch (err) {
      console.log('Please log in or sign up to access Taskaholic!');
    }
  };

  useEffect(() => {
    getMe();
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await axios.post('/api/v1/auth/login', {
        email: email,
        password: password,
      });

      setUser({
        auth: data.success,
        data: {},
      });
    } catch (err) {
      setUser({
        auth: false,
        data: {},
      });
      console.log(`Log in error in user context ${err}`);
    }

    getMe();
  };

  const logout = async () => {
    try {
      await axios.get('/api/v1/auth/logout');

      setUser({
        auth: false,
        data: {},
      });
    } catch (err) {
      console.log(`Log out error in user context ${logout}`);
    }
  };

  const signup = async (name, email, password) => {
    try {
      const { data } = await axios.post('/api/v1/auth/register', {
        name: name,
        email: email,
        password: password,
      });

      setUser({
        auth: data.success,
        data: {},
      });
    } catch (err) {
      console.log(`Sign up error in user context: ${err}`);
    }

    getMe();
  };

  return (
    <UserContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
