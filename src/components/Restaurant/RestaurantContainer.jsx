import { Restaurant } from "./Restaurant";
import {
    useAddReviewMutation,
    useGetRestaurantByIdQuery,
    useChangeReviewMutation,
} from "../../Redux/Services/api";
import styles from "./RestaurantContainer.module.scss";
import { useReviewChanging } from "../Reviews/useReviewChanging";

export const RestaurantContainer = ({ id }) => {
    const {
        isError,
        isLoading,
        data: restaurant,
    } = useGetRestaurantByIdQuery(id);

    const [addReview, { isLoading: isAddLoadingReview }] =
        useAddReviewMutation();

    const [changeReview, { isLoading: isChangeReviewLoading }] =
        useChangeReviewMutation();

    // вынес логику связанную с изменением отзыва в отельный компонент
    const { handleButtonText, handleSubmit } = useReviewChanging(changeReview, addReview, id) 
    
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
