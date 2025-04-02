import { createContext, useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 < Date.now()) {
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          setUser(null); // Logout user
        } else {
          setUser({ token, role: localStorage.getItem("role") });
        }
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setUser(null);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
