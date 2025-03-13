import { useState } from "react"

export function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count < 5) {
            setCount(count + 1);
        }
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div style={{"display": "flex", "gap": "10px", "alignItems": "center"}}>
            <button onClick={decrement}>-</button>
            {count}
            <button onClick={increment}>+</button>
        </div>
    )
    
}