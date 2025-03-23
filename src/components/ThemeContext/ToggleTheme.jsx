import { use } from "react";
import { CommonButton } from "../CommonButton/CommonButton";
import { ThemeContext } from "./index";

export const ToggleTheme = () => {
    const { theme, toggleTheme } = use(ThemeContext);

    return (
        <CommonButton
            onClick={toggleTheme}
            externalSettings={{ margin: "20px" }}
        >
            {theme === "default" ? "switch to alt" : "switch to default"}
        </CommonButton>
    );
};
