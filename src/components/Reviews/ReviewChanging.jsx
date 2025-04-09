import { use } from "react";
import { UserContext } from "../UserContext";
import { useGetReviewsByRestaurantQuery } from "../../Redux/Services/api";

export const ReviewChanging = (changeReview, addReview, id) => {
    const { userId } = use(UserContext);

    // в этом месте я ищу отзыва текущего пользователя
    const { data: reviews, isLoading, error } = useGetReviewsByRestaurantQuery(id);

    const reviewByUserId = reviews?.find(review => review.userId === userId);

    const handleSubmit = (review) => {
        return reviewByUserId?.id // если пользователь уже оставлял отзыв, то он может его изменить
            ? changeReview({
                  restaurantId: id,
                  review: { ...review, id: reviewByUserId.id },
              })
            : addReview({ restaurantId: id, review });
    };

    if (error) return "error"
    if (isLoading) return "loading"
    
    const handleButtonText = reviewByUserId?.id ? "Change" : "Submit"; // надпись кнопки я отображаю условно
    return { handleButtonText, handleSubmit };
};
