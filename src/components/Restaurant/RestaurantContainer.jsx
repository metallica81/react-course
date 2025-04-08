import { Restaurant } from "./Restaurant";
import {
    useAddReviewMutation,
    useGetRestaurantByIdQuery,
    useChangeReviewMutation,
    useGetReviewByUserIdQuery,
} from "../../Redux/Services/api";
import styles from "./RestaurantContainer.module.scss";
import { use } from "react";
import { UserContext } from "../UserContext";

export const RestaurantContainer = ({ id }) => {
    const {
        isError,
        isLoading,
        data: restaurant,
    } = useGetRestaurantByIdQuery(id);

    const { userId } = use(UserContext);
    const {
        isError: isErrorGetReviewByUserId,
        isLoading: isLoadingGetReviewByUserId,
        data: reviewByUserId,
    } = useGetReviewByUserIdQuery(userId);

    if (isErrorGetReviewByUserId) {
        ("ErrorGetReviewByUserId");
    }

    if (isLoadingGetReviewByUserId) {
        ("isLoadingGetReviewByUserId");
    }

    const [addReview, { isLoading: isAddLoadingReview }] =
        useAddReviewMutation();
    const [changeReview, { isLoading: isChangeReviewLoading }] =
        useChangeReviewMutation();

    const handleSubmit = (review) => {
        return reviewByUserId?.id
            ? changeReview({
                  restaurantId: id,
                  review: { ...review, id: reviewByUserId.id }, 
              })
            : addReview({ restaurantId: id, review });
    };

    const handleButtonText = () => {
        return reviewByUserId?.id
            ? "Change"
            : "Submit"
    }

    const isLoadingReview = () => isAddLoadingReview || isChangeReviewLoading;

    if (isError) {
        return "error";
    }

    if (isLoading) {
        return "loading...";
    }

    if (!restaurant) {
        return null;
    }

    const { name } = restaurant;

    return (
        <Restaurant
            name={name}
            externalClassname={styles.externalClassname}
            onSubmit={handleSubmit}
            isSubmitButtonDisabled={isLoadingReview}
            handleButtonText={handleButtonText}
        />
    );
};
