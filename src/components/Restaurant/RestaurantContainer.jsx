"use client"

import { Restaurant } from "./Restaurant";
import {
    useAddReviewMutation,
    useChangeReviewMutation,
} from "../../Redux/Services/api";
import styles from "./RestaurantContainer.module.scss";
import { useReviewChanging } from "../Reviews/useReviewChanging";

export const RestaurantContainer = ({ restaurant, id, reviews }) => {

    const [addReview, { isLoading: isAddLoadingReview }] =
        useAddReviewMutation();

    const [changeReview, { isLoading: isChangeReviewLoading }] =
        useChangeReviewMutation();

    // вынес логику связанную с изменением отзыва в отельный компонент
    const { handleButtonText, handleSubmit } = useReviewChanging(changeReview, addReview, id, reviews) 
    
    const isLoadingReview = () => isAddLoadingReview || isChangeReviewLoading;

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
