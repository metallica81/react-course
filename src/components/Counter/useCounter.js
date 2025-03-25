import { useState } from "react";

export function useCounter() {
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
        {
            increment,
            count,
            decrement
        }
    )
}