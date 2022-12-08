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

  const setBlack = () => {
    setTheme("black");
  };

  const setWireframe = () => {
    setTheme("wireframe");
  };

  const setSynthwave = () => {
    setTheme("synthwave");
  };

  const setLight = () => {
    setTheme("light");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDark,
        setCyberpunk,
        setRetro,
        setBlack,
        setWireframe,
        setSynthwave,
        setLight,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
