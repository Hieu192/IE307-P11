import React, { createContext, useState } from "react";

export const AuthContext = createContext()

export const AppContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (email, password) => {
    setIsAuthenticated(true);
    if (email == "21520235@gm.uit.edu.vn" && password == "phamquanghieu") {
      setIsAuthenticated(true);
      setEmail(email);
      setPassword(password);
    }else {
        alert('Incorrect email or password');
      }
    };
  
    const logout = () => {
      setIsAuthenticated(false);
      setEmail('');
      setPassword('');
    };
  
    return (
      <AuthContext.Provider value={{ isAuthenticated, email, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };