import { useOutletContext } from "react-router";
import { useGetReviewsByIdQuery } from "../../Redux/Services/api";

export function RestaurantReviewsPage() {
    const { restaurantId } = useOutletContext();

    const { isLoading, isError, data: reviews } = useGetReviewsByIdQuery(restaurantId);
    console.log('reviews', reviews)
    if (isError) {
        return "error";
    }

    if (isLoading) {
        return "loading...";
    } 

    return (
        <>
            <h3>Отзывы</h3>
            <ul>
                {reviews.map((review) => {
                    return (
                        Boolean(review.text) && (
                            <li key={review.id}>{review.text}</li>
                        )
                    );
                })}
            </ul>
        </>
    );
}
