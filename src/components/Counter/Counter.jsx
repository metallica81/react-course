import styles from "./Counter.module.scss";

export function Counter({ onIncrement, count, onDecrement, isAuthorized }) {  

    return (
        <div className={styles.root}>
            { isAuthorized && <button onClick={onDecrement}>-</button>}
            {count}
            { isAuthorized && <button onClick={onIncrement}>+</button>}
        </div>
    );
}
