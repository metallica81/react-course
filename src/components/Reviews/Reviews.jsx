
import { ReviewListItem } from "./ReviewListItem";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectRestaurantById } from "../../Redux/Entities/Restaurant/slice";

export function Reviews() {
    const { restaurantId } = useParams();

    const { reviews } = useSelector((state) => selectRestaurantById(state, restaurantId));
    
    return (
        <>
            <h3>Отзывы</h3>
            <ul>
                {reviews.map((reviewsId) => {
                    return <ReviewListItem key={reviewsId} reviewsId={reviewsId} />
                })}
            </ul>
        </>
    );
}
