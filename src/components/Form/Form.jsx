import { CommonButton } from "../CommonButton/CommonButton";
import { Counter } from "../Counter/Counter";
import styles from "./Form.module.scss";
import { useRef } from "react";
import { useActionState } from "react";

export function Form({ submitFormAction }) {
    const ratingRef = useRef();

    const [formState, submitAction, isPending] = useActionState(
        submitFormAction,
        {
            text: "default text",
            rating: 5,
        }
    );

    return (
        <form
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            action={submitAction}
        >
            <div>
                <label htmlFor="text">Text</label>
                <input
                    type="text"
                    id="text"
                    name="text"
                    defaultValue={formState.text}
                />
            </div>

            {formState.errorMessage && <div>error</div>}

            <div>
                <label htmlFor="rating">Rating</label>
                <button
                    type="button"
                    id="decrement-button"
                    onClick={() => ratingRef.current.stepDown()}
                >
                    -
                </button>
                <input
                    type="number"
                    id="rating"
                    name="rating"
                    min={1}
                    max={5}
                    ref={ratingRef}
                    defaultValue={formState.rating}
                />
                <button
                    type="button"
                    id="increment-button"
                    onClick={() => ratingRef.current.stepUp()}
                >
                    +
                </button>
            </div>

            <CommonButton
                type="submit"
                formAction={() => submitAction(null)}
                title="clear"
            />
            <CommonButton type="submit">submit</CommonButton>
        </form>
    );
}
