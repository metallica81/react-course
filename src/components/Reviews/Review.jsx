import { useSelector } from "react-redux";
import { selectReviewById } from "../../Redux/Entities/Review/slice";

export function Review({ reviewsIds }) {
    const review = useSelector((state) => selectReviewById(state, reviewsIds))

    return(
        Boolean(review.text) && (
            <li key={review.id}>{review.text}</li>
        )
    );
}