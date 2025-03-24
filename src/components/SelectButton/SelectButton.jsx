import classNames from "classnames";
import styles from "./SelectButton.module.scss";
import { use } from "react";
import { ThemeContext } from "../ThemeContext";

export const SelectButton = ({
    isActive,
    onClick,
    children,
    className,
    variant = "primary",
}) => {
    const { theme } = use(ThemeContext);
    return (
        <button
            type="button"
            onClick={onClick}
            className={classNames(className, {
                [styles.default]: theme === "default",
                [styles.alternative]: theme === "alternative",
                [styles.primary]: variant === "primary",
                [styles.danger]: variant === "danger",
                [styles.isActive]: !!isActive
            })}
        >
            {children}
        </button>
    );
};
