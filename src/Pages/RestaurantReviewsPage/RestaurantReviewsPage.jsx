import { ReviewListItem } from "../../components/Reviews/ReviewListItem";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router";
import { selectRestaurantById } from "../../Redux/Entities/Restaurant/slice";

export function RestaurantReviewsPage() {
    const { restaurantId } = useOutletContext();

    const { reviews } = useSelector((state) =>
        selectRestaurantById(state, restaurantId)
    );

    return (
        <>
            <h3>Отзывы</h3>
            <ul>
                {reviews.map((reviewsId) => {
                    return (
                        <ReviewListItem key={reviewsId} reviewsId={reviewsId} />
                    );
                })}
            </ul>
        </>
    );
}
