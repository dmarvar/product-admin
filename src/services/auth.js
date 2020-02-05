import React, { useEffect, useState } from "react";
import app from "../utils/firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  useEffect(() => {
    app.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoadingUser(false);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, loadingUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const Signout = () => {
  app.auth().signOut();
};
