import React, { createContext, useContext, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("userInfo")
  );

  function login() {
    setIsAuthenticated(true);
    localStorage.setItem("userInfo", "admin");
  }
  function logout() {
    setIsAuthenticated(false);
    localStorage.removeItem("userInfo");
  }

  function update(status) {
    setIsAuthenticated(status);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, update }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
