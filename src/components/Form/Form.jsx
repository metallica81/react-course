import { handleSubmit } from "./handleSubmit";
import { useFormReducer } from "./useReducer";
import { CommonButton } from "../CommonButton/CommonButton";
import { Counter } from "../Counter/Counter";

export function Form() {
    const {
        setName,
        setText,
        setRating,
        increment,
        decrement,
        setClear,
        form,
    } = useFormReducer();
    const { name, text, rating, count } = form;

    return (
        <form
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                style={{ width: "300px" }}
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <textarea
                name=""
                id=""
                style={{ width: "300px", height: "100px" }}
                placeholder="Текст"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div>
                <h4>Рейтинг</h4>
                {[1, 2, 3, 4, 5].map((num) => (
                    <label key={num}>
                        <input
                            type="radio"
                            name="rating"
                            value={num}
                            checked={rating === num}
                            onChange={() => setRating(num)}
                        />
                        {num}
                    </label>
                ))}
                <br />
            </div>
            <Counter
                onDecrement={decrement}
                count={count}
                onIncrement={increment}
            />

            <CommonButton onClick={setClear}>Clear</CommonButton>
        </form>
    );
}
