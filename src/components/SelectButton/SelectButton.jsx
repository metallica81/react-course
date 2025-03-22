import classNames from "classnames";
import styles from "./SelectButton.module.scss";
import { use } from "react";
import { ThemeContext } from "../ThemeContext";

export const SelectButton = ({ isActive, onClick, children, externalSettings}) => {
    const { theme } = use(ThemeContext);
    return (
        <button
            type="button"
            onClick={onClick}
            className={classNames(styles.button, externalSettings, {
                [styles.default]: theme === "default",
                [styles.alternative]: theme === "alternative",
              })}
            style={{
                fontWeight: isActive ? "bold" : "normal",
            }}
        >
            {children}
        </button>
    );
};
