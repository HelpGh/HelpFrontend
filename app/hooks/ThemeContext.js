import React, { createContext, useState, useContext } from 'react';
import colors from '../config/colors';
const lightTheme = {
    primary:'#D8E1EF',
    secondary:'#0E6AE0FC',
    white:'#fff',
    medium:'#675757',
    active:'#020E7E',
    dark: "#2c2c2c",
    grey:'#535353ce',
    textColor: colors.dark,
    // Add other styles for the light theme
  };
  
  const darkTheme = {
    backgroundColor: '#222222',
    textColor: 'white',
    // Add other styles for the dark theme
  };

  
const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(lightTheme); // Set the initial theme here

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
