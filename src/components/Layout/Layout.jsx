"use client"

import { ProgressBar } from "../ProgressBar/ProgressBar";
import styles from "./Layout.module.scss";
import { ToggleTheme } from "../ThemeContext/ToggleTheme";
import { ToggleStatus } from "../UserContext/ToggleStatus";
import { CartContainer } from "../Cart/CartContainer";

export function Layout({children}) {
    return (
        <>
            <ProgressBar />
            <div className={styles.wrapper}>
                <header className={styles.header}>
                    <ToggleTheme />
                    <ToggleStatus />
                </header>
                <section>
                    {children}
                </section>
                <CartContainer />
                <footer className={styles.footer}>footer</footer>
            </div>
        </>
    );
}
