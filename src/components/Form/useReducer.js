import { useReducer } from "react";

const DEFAULT_FORM = {
    name: "",
    text: "",
    rating: null
};

const SET_NAME = 'SET_NAME';
const SET_TEXT = 'SET_TEXT';
const SET_RATING = 'SET_RATING';
const SET_CLEAR = 'SET_CLEAR';

function reducer(state, { type, payload }) {
    switch (type) {
        case SET_NAME:
            return { ...state, name: payload };
        case SET_TEXT:
            return { ...state, text: payload };
        case SET_RATING:
            return { ...state, rating: payload };
        case SET_CLEAR:
            return { ...DEFAULT_FORM }
        default:
            return state;
    }
}

export function useFormReducer() {

    const [form, dispatch] = useReducer(reducer, DEFAULT_FORM);

    const setName = (name) => dispatch({type: SET_NAME, payload: name})
    const setText = (text) => dispatch({type: SET_TEXT, payload: text})
    const setRating = (rating) => dispatch({type: SET_RATING, payload: rating})
    const setClear = () => dispatch({ type: SET_CLEAR })

    return {
        setName,
        setText,
        setRating,
        setClear,
        form
    }
}