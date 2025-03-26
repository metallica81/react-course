import { Form } from "../Form/Form";
import { selectReviewById } from "../../Redux/Entities/Review/slice";
import { useSelector } from "react-redux";

export function Reviews({ reviews }) {
    const reviewText = useSelector((state) =>
        reviews.map((reviewId) => selectReviewById(state, reviewId))
    );

    return (
        <>
            <h3>Отзывы</h3>
            <ul>
                {reviewText.map((reviews) => {
                    return (
                        Boolean(reviews.text) && (
                            <li key={reviews.id}>{reviews.text}</li>
                        )
                    );
                })}
            </ul>
            
            <Form />
        </>
    );
}
