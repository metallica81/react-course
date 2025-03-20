import { useEffect, useState } from "react";

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
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                height: "4px",
                backgroundColor: "blue",
                width: `${progress}%`,
                transition: "width 0.1s ease-out",
            }}
        />
    );
}
