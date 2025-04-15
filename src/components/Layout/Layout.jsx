import { ProgressBar } from "../ProgressBar/ProgressBar";
import styles from "./Layout.module.scss";
import { ToggleTheme } from "../ThemeContext/ToggleTheme";
import { ToggleStatus } from "../UserContext/ToggleStatus";
import { CartContainer } from "../Cart/CartContainer";
import { CartWrapper } from "../Cart/CartWrapper";

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
                <CartWrapper />
                <footer className={styles.footer}>footer</footer>
            </div>
        </>
    );
}
