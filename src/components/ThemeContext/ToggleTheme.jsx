import { use } from "react";
import { CommonButton } from "../CommonButton/CommonButton";
import { ThemeContext } from "./index";
import styles from './ToggleTheme.module.scss';

export const ToggleTheme = () => {
    const { theme, toggleTheme } = use(ThemeContext);

    return (
        <CommonButton
            onClick={toggleTheme}
            externalSettings={styles.externalSettings}
        >
            {theme === "default" ? "switch to alt" : "switch to default"}
        </CommonButton>
    );
};
