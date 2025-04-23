import { ProgressBar } from "../ProgressBar/ProgressBar";
import styles from "./Layout.module.scss";
import { ToggleTheme } from "../ThemeContext/ToggleTheme";
import { ToggleStatus } from "../UserContext/ToggleStatus";
import { CartWrapper } from "../Cart/CartWrapper";
import { Suspense } from "react";

export function Layout({children}) {
    return (
        <Suspense fallback='...loading Layout'>
            <ProgressBar />
            <div className={styles.wrapper}>
                <header className={styles.header}>
                    <ToggleTheme />
                    <ToggleStatus />
                </header>
                <section>
                    {children}
                </section>
                <CartWrapper />
                <footer className={styles.footer}>footer</footer>
            </div>
        </Suspense>
    );
}
