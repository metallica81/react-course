import { useOutletContext } from "react-router";
import { useGetReviewsByIdQuery } from "../../Redux/Services/api";

export function RestaurantReviewsPage() {
    const { restaurantId } = useOutletContext();

    const { isLoading, isError, data: reviews } = useGetReviewsByIdQuery(restaurantId);
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
                {reviews.map(({id, text}) => {
                    return (
                        Boolean(text) && (
                            <li key={id}>{text}</li>
                        )
                    );
                })}
            </ul>
        </>
    );
}
