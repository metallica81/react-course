import { ThemeContext } from "../ThemeContext";
import { use } from "react";
import classNames from "classnames";
import styles from "./CommonButton.module.scss";

export function CommonButton({
    isActive,
    sizeVariant = "commonSize",
    colorVariant = "commonColor",
    children,
    onClick,
    externalClassname,
}) {
    const { theme } = use(ThemeContext);
    return (
        <button
            type="button"
            onClick={onClick}
            className={classNames(externalClassname, {
                [styles.default]: theme === "default",
                [styles.alternative]: theme === "alternative",
                [styles.commonSize]: sizeVariant === "commonSize",
                [styles.navSelectorSize]: sizeVariant === "navSelectorSize",
                [styles.commonColor]: colorVariant === "commonColor",
                [styles.navSelectorColor]: colorVariant === "navSelectorColor",
                [styles.isActive]: !!isActive,
            })}
        >
            {children}
        </button>
    );
}
