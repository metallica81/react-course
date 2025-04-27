import RestaurantReviewsPage from "../../../../components/Pages/RestaurantReviewsPage/RestaurantReviewsPage";
import { getReviewById } from "../../../../Services/getReviewById";

const ReviewPageWrapper = async ({ params }) => {
    const { restaurantId } = await params;

    const reviews = await getReviewById(restaurantId);

    return <RestaurantReviewsPage reviews={reviews} />;
};

export default ReviewPageWrapper;
