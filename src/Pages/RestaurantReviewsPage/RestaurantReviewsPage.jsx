import { ReviewListItem } from "../../components/Reviews/ReviewListItem";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router";
import { selectRestaurantById } from "../../Redux/Entities/Restaurant/slice";
import { getReviews } from "../../Redux/Entities/Review/getReviews";
import { useRequest } from "../../Redux/Hooks/useRequest";
import { IDLE, PENDING, REJECTED } from "../../Redux/consts";

export function RestaurantReviewsPage() {
    const { restaurantId } = useOutletContext();

    const requestStatus = useRequest(getReviews, restaurantId);
    const { reviews } = useSelector((state) =>
        selectRestaurantById(state, restaurantId)
    );

    if (requestStatus === IDLE || requestStatus === PENDING) {
        return 'loading...';
      }
    
      if (requestStatus === REJECTED) {
        return 'error';
      }

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
