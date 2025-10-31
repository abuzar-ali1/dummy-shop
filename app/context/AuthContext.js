'use client';
import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  // Check for user on initial load (same as your header useEffect)
  useEffect(() => {
    const userData = localStorage.getItem('dummyshop_currentUser');
    if (userData) {
      setCurrentUser(JSON.parse(userData));
    }
  }, []);

  // Login function that updates context
  const login = (userData) => {
    localStorage.setItem('dummyshop_currentUser', JSON.stringify(userData));
    setCurrentUser(userData); // This triggers re-render
  };

  // Logout function that updates context  
  const logout = () => {
    localStorage.removeItem('dummyshop_currentUser');
    setCurrentUser(null); // This triggers re-render
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
