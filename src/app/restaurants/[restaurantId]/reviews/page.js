import RestaurantReviewsPage from "../../../../components/Pages/RestaurantReviewsPage/RestaurantReviewsPage";
import { getReviewById } from "../../../../Services/getReviewById";
import { Suspense } from "react";

const ReviewPageWrapper = async ({ params }) => {
    const { restaurantId } = await params;

    const reviews = await getReviewById(restaurantId);

    return (
        <Suspense fallback='loading...'>
            <RestaurantReviewsPage reviews={reviews} />
        </Suspense>
)

}

export default ReviewPageWrapper;