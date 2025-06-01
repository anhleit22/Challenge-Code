import React, { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(false);
    
  // Only state management, no login logic
  return (
    <LoginContext.Provider value={{ user, setUser}}>
      {children}
    </LoginContext.Provider>
  );
};