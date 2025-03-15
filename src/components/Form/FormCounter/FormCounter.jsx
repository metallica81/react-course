import { Counter } from "../../Counter/Counter";
import { useCounter } from "../../Counter/useCounter";

export function FormCouter() {
    const {increment, count, decrement} = useCounter();
    return (
        <Counter onDecrement={decrement} count={count} onIncrement={increment} />
    )
}