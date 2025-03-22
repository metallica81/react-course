import { use } from "react";
import { CommonButton } from "../CommonButton/CommonButton";
import { ThemeContext } from "../ThemeContext";

export const ToggleTheme = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <CommonButton onClick={toggleTheme}>
      {theme === "light" ? "switch to dark" : "switch to light"}
    </CommonButton>
  );
};
