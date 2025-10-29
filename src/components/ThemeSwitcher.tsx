/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from "react";

interface ThemeContextType {
  theme: boolean;
  handleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  
  const [theme, setTheme] = useState(true);

  const handleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = !prevTheme;
      return newTheme
    })
  }

  const value: ThemeContextType = { theme, handleTheme }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if(!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return  context;
}