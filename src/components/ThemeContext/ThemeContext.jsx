import { useState } from "react";
import { ThemeContext as ThemeContextProvider } from ".";

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("default");

  const toggleTheme = () => {
    if (theme === "default") {
      setTheme("alternative");
    } else {
      setTheme("default");
    }
  };

  return (
    <ThemeContextProvider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContextProvider>
  );
};
