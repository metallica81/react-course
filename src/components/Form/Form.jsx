import { handleSubmit } from "./handleSubmit";
import { useFormReducer } from "./useReducer";
import { CommonButton } from "../CommonButton/CommonButton";
import { Counter } from "../Counter/Counter";
import styles from "./Form.module.scss";
import { use } from "react";
import { UserContext } from "../UserContext";

export function Form({ onSubmit, isSubmitButtonDisabled, handleButtonText }) {
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

    const { isAuth, userId } = use(UserContext);

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

            {isAuth && <Counter
                onDecrement={decrement}
                count={count}
                onIncrement={increment}
            />}

            <CommonButton
                onClick={setClear}
                externalClassname={styles.commonButton}
            >
                Clear
            </CommonButton>
            
            {!!isAuth && <CommonButton
                disabled={isSubmitButtonDisabled}
                onClick={() => onSubmit({text, rating, userId: userId})}
                externalClassname={styles.commonButton}
            >
                {handleButtonText}
            </CommonButton>}
        </form>
    );
}
