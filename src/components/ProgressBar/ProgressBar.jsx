import { useEffect, useRef } from "react";
import ScrollProgress from "scrollprogress";

export function ProgressBar() {
    const progressRef = useRef(null);
    useEffect(() => {
        const progressElement = progressRef.current;
        if (!progressElement) return;

        const progressObserver = new ScrollProgress((x, y) => {
            progressElement.style.width = y * 100 + "%";
        });

        return () => {
            progressObserver.destroy(); // Очищаем при размонтировании
        };
    }, []);

    return (
        <div
            ref={progressRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                height: "4px",
                backgroundColor: "blue",
                width: "0%",
                transition: "width 0.1s ease-out",
            }}
        ></div>
    );
}
