//import { Clear } from "../Clear/Clear";
import { handleSubmit } from "./handleSubmit";
import { FormCouter } from "./FormCounter/FormCounter";
import { useFormReducer } from "./useReducer";
import { CommonButton } from "../CommonButton/CommonButton";

export function Form() {

    const { setName, setText, setRating, setClear, form } = useFormReducer();
    const {name, text, rating} = form;

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
            <FormCouter />
            <CommonButton 
                onClick={() => setClear()} 
                text={ 'Clear' } 
            />
        </form>
    );
}
