import { CommonButton } from "../CommonButton/CommonButton";
import { useRef } from "react";
import { useActionState } from "react";

export function Form({ submitFormAction, onUpdateReview, isUserPostReview }) {
    const ratingRef = useRef();

    const [formState, submitAction] = useActionState(submitFormAction, {
        text: "default text",
        rating: 5,
    });

    const handlePatch = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target.form);
        onUpdateReview(formData);
    };

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

            <div>
                <label htmlFor="rating">Rating</label>
                <button
                    type="button"
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
                    onClick={() => ratingRef.current.stepUp()}
                >
                    +
                </button>
            </div>

            {isUserPostReview ? (
                <CommonButton
                    type="button"
                    onClick={handlePatch}
                >
                    update
                </CommonButton>
            ) : (
                <CommonButton type="submit">submit</CommonButton>
            )}
        </form>
    );
}
