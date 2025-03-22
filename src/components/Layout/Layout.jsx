import { CommonButton } from "../CommonButton/CommonButton";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import styles from "./Layout.module.scss";

export function Layout({ children }) {
    return (
        <>
            <ProgressBar />
            <div className={styles.wrapper}>
                <header className={styles.header}>
                    button
                    {/* <CommonButton onClick={} text='Change theme'></CommonButton> */}
                </header>
                <section>{children}</section>
                <footer className={styles.footer}>footer</footer>
            </div>
        </>
    );
}
