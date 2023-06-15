/* eslint-disable react/jsx-no-constructed-context-values */
// import React, { useState, useContext, createContext } from "react";
// import PropTypes from "prop-types";

// const AuthContext = createContext(null);

// function AuthProvider({ children }) {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   return (
//     // The object passed as the value prop to the Context provider (at line 8) changes every render. To fix this consider wrapping it in a useMemo hook.
//     // eslint-disable-next-line react/jsx-no-constructed-context-values
//     <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// AuthProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
// export const useAuth = () => useContext(AuthContext);

// export default AuthProvider;
import React, { useState, useContext, createContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    // The object passed as the value prop to the Context provider (at line 32) changes every render. To fix this consider wrapping it in a useMemo hook.
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
