import styles from "./Counter.module.scss";
import { UserContext } from "../UserContext";
import { use } from "react";

export function Counter({ onIncrement, count, onDecrement }) {
    const { status } = use(UserContext);
    return (
        <div className={styles.root}>
            {status == "sign in" && <button onClick={onDecrement}>-</button>}
            {count}
            {status == "sign in" && <button onClick={onIncrement}>+</button>}
        </div>
    );
}
