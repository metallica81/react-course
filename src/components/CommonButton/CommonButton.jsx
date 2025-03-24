import { ThemeContext } from "../ThemeContext";
import { use } from "react";
import classNames from "classnames";
import styles from './CommonButton.module.scss';

export function CommonButton({ variant = "primary", children, onClick, externalSettings }) {
    const { theme } = use(ThemeContext);
    return (
        <button
            onClick={onClick}
            className={classNames(externalSettings, {
                [styles.default]: theme === "default",
                [styles.alternative]: theme === "alternative",
                [styles.primary]: variant === "primary",
                [styles.danger]: variant === "danger"
            })}
        >
            {children}
        </button>
    );
}
