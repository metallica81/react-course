import { Clear } from "../Clear/Clear";
import { useReducer } from "react";
import { handleSubmit } from "./handleSubmit";
import { FormCouter } from "./FormCounter/FormCounter";

const DEFAULT_FORM = {
    name: "",
    text: "",
    rating: null
};
const SET_NAME = 'SET_NAME';
const SET_TEXT = 'SET_TEXT';
const SET_RATING = 'SET_RATING';

function reducer(state, { type, payload }) {
    switch (type) {
        case SET_NAME:
            return { ...state, name: payload };
        case SET_TEXT:
            return { ...state, text: payload };
        case SET_RATING:
            return { ...state, rating: payload };
        default:
            return state;
    }
}

export function Form() {
    const [form, dispatch] = useReducer(reducer, DEFAULT_FORM);

    const {name, text, rating} = form;

    const setName = (name) => dispatch({type: SET_NAME, payload: name})
    const setText = (text) => dispatch({type: SET_TEXT, payload: text})
    const setRating = (rating) => dispatch({type: SET_RATING, payload: rating})

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
            <Clear handlers={{ setName, setText, setRating }} />
        </form>
    );
}
