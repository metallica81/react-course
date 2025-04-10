// import Link from "next/link";
import { NavLink } from "react-router";
import styles from "./TabLink.module.scss";
import classNames from "classnames";

export function TabNavLink({ externalClassname, to, children, isActive, onClick }) {
    return (
        <NavLink
            className={classNames(externalClassname, styles.tabLink, {
                [styles.isActive]: !!isActive,
            })}
            to={to}
            onClick={onClick}
        >
            {children}
        </NavLink>
    );
}
