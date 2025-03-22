import { useEffect, useState } from "react";
import styles from './ProgressBar.module.scss';

export function ProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            const docHeight = document.documentElement.scrollHeight;

            const viewportHeight = window.innerHeight;

            const scrollableHeight = docHeight - viewportHeight;

            const progressPercent = (scrollTop / scrollableHeight) * 100;

            setProgress(progressPercent);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={styles.root}
            style={{
                width: `${progress}%`,
            }}
        />
    );
}
