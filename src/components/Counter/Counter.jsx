import styles from "./Counter.module.scss";

export function Counter({ onIncrement, count, onDecrement }) {
    return (
        <div className={styles.root}>
            <button onClick={onDecrement}>-</button>
            {count}
            <button onClick={onIncrement}>+</button>
        </div>
    );
}
