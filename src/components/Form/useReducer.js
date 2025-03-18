import { useReducer } from "react";

const DEFAULT_FORM = {
    name: "",
    text: "",
    rating: null,
    count: 0
};

const SET_NAME = 'SET_NAME';
const SET_TEXT = 'SET_TEXT';
const SET_RATING = 'SET_RATING';
const SET_CLEAR = 'SET_CLEAR';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

function reducer(state, { type, payload }) {
    switch (type) {
        case SET_NAME:
            return { ...state, name: payload };
        case SET_TEXT:
            return { ...state, text: payload };
        case SET_RATING:
            return { ...state, rating: payload };
        case INCREMENT:
            return { ...state, count: Math.min(state.count + 1, 5) };
        case DECREMENT:
            return { ...state, count: Math.max(state.count - 1, 0) };
        case SET_CLEAR:
            return DEFAULT_FORM;
        default:
            return state;
    }
}

export function useFormReducer() {

    const [form, dispatch] = useReducer(reducer, DEFAULT_FORM);

    const setName = (name) => dispatch({type: SET_NAME, payload: name})
    const setText = (text) => dispatch({type: SET_TEXT, payload: text})
    const setRating = (rating) => dispatch({type: SET_RATING, payload: rating})
    const increment = () => dispatch({type: INCREMENT})
    const decrement = () => dispatch({type: DECREMENT})
    const setClear = () => dispatch({ type: SET_CLEAR })

    return {
        setName,
        setText,
        setRating,
        increment,
        decrement,
        setClear,
        form
    }
}