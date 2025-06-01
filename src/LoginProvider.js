import React, { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [id, setID] = useState(null);
  const [phoneAPI, setPhoneAPI] = useState(null);
    
  // Only state management, no login logic
  return (
    <LoginContext.Provider value={{ user, setUser, id, setID, phoneAPI, setPhoneAPI}}>
      {children}
    </LoginContext.Provider>
  );
};