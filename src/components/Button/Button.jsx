import styles from "./Button.module.scss";

export const Button = ({ isActive, onClick, children }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={styles.root}
            style={{
                fontWeight: isActive ? "bold" : "normal",
            }}
        >
            {children}
        </button>
    );
};