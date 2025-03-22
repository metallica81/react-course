import { ThemeContext } from "../ThemeContext";
import { use } from "react";
import classNames from "classnames";
import styles from './CommonButton.module.scss';

export function CommonButton({ children, onClick, externalSettings }) {
    const { theme } = use(ThemeContext);
    return (
        <button
            style={{ ...externalSettings }}
            onClick={onClick}
            className={classNames(styles.button, {
                [styles.default]: theme === "default",
                [styles.alternative]: theme === "alternative",
            })}
        >
            {children}
        </button>
    );
}
