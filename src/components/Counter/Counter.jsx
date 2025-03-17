export function Counter({ onIncrement, count, onDecrement }) {

    return (
        <div style={{"display": "flex", "gap": "10px", "alignItems": "center"}}>
            <button onClick={onDecrement}>-</button>
            {count}
            <button onClick={onIncrement}>+</button>
        </div>
    )
}