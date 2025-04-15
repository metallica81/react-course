import { RestaurantReviewsPage } from "../../../../Pages/RestaurantReviewsPage/RestaurantReviewsPage";
import { getReviewById } from "../../../../Services/getReviewById";
import { revalidateTag } from "next/cache";
import { Suspense } from "react";

const ReviewPageWrapper = async ({ params }) => {
    const { restaurantId } = await params;

    const reviews = await getReviewById(restaurantId);

    await revalidateTag('getReviewById');

    return (
        <Suspense fallback='loading...'>
            <RestaurantReviewsPage reviews={reviews} />
        </Suspense>
)

}

export default ReviewPageWrapper;