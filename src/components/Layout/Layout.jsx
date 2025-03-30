import { ProgressBar } from "../ProgressBar/ProgressBar";
import styles from "./Layout.module.scss";
import { ToggleTheme } from "../ThemeContext/ToggleTheme";
import { ToggleStatus } from "../UserContext/ToggleStatus";
import { Outlet } from "react-router";

export function Layout() {
    return (
        <>
            <ProgressBar />
            <div className={styles.wrapper}>
                <header className={styles.header}>
                    <ToggleTheme />
                    <ToggleStatus />
                </header>
                <section><Outlet /></section>
                <footer className={styles.footer}>footer</footer>
            </div>
        </>
    );
}
