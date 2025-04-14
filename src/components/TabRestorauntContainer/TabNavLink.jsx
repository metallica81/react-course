import Link from "next/link";
import styles from "./TabLink.module.scss";
import classNames from "classnames";

export function TabNavLink({ externalClassname, to, children, isActive, onClick }) {
    return (
        <Link
            className={classNames(externalClassname, styles.tabLink, {
                [styles.isActive]: !!isActive,
            })}
            href={`/restaurants/${to}`}
            onClick={onClick}
        >
            {children}
        </Link>
    );
}
