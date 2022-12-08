import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("cyberpunk");

  const setDark = () => {
    setTheme("dark");
  };

  const setCyberpunk = () => {
    setTheme("cyberpunk");
  };

  const setRetro = () => {
    setTheme("retro");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDark,
        setCyberpunk,
        setRetro,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
