import { use } from "react";
import { UserContext } from "../UserContext";

export const useReviewChanging = (changeReview, addReview, id, reviews) => {
    const { userId } = use(UserContext);

    const reviewByUserId = reviews?.find(review => review.userId === userId);

    const handleSubmit = (review) => {
        return reviewByUserId?.id // если пользователь уже оставлял отзыв, то он может его изменить
            ? changeReview({
                  restaurantId: id,
                  review: { ...review, id: reviewByUserId.id },
              })
            : addReview({ restaurantId: id, review });
    };
    
    const handleButtonText = reviewByUserId?.id ? "Change" : "Submit"; // надпись кнопки я отображаю условно
    return { handleButtonText, handleSubmit };
};
