import { useSelector } from "react-redux";
import { selectReviewById } from "../../Redux/Entities/Review/slice";

export function ReviewListItem({ reviewsId }) {
    const review = useSelector((state) => selectReviewById(state, reviewsId))

    return(
        Boolean(review.text) && (
            <li key={review.id}>{review.text}</li>
        )
    );
}