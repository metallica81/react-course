import { ProgressBar } from "../ProgressBar/ProgressBar";
import styles from "./Layout.module.scss";
import { ToggleTheme } from "../ThemeContext/ToggleTheme";

export function Layout({ children }) {
    return (
        <>
            <ProgressBar />
            <div className={styles.wrapper}>
                <header className={styles.header}>
                    <ToggleTheme />
                </header>
                <section>{children}</section>
                <footer className={styles.footer}>footer</footer>
            </div>
        </>
    );
}
