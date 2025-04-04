import { NavLink } from "react-router";
import styles from "./TabLink.module.scss";
import classNames from "classnames";

export function TabNavLink({ externalClassname, to, children, isActive }) {
    return (
        <NavLink
            className={classNames(externalClassname, styles.tabLink, {
                [styles.isActive]: !!isActive,
            })}
            to={to}
        >
            {children}
        </NavLink>
    );
}
