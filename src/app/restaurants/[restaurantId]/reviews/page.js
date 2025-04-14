import { RestaurantReviewsPage } from "../../../../Pages/RestaurantReviewsPage/RestaurantReviewsPage";

const ReviewPageWrapper = async ({ params }) => {
    const { restaurantId } = await params;
    return <RestaurantReviewsPage restaurantId={restaurantId} />
}

export default ReviewPageWrapper;