"use client";

import { Restaurant } from "./Restaurant";
import { useCallback, useOptimistic, useContext } from "react";
import { addReviewAction } from "../../actions/addReviewAction";
import { UserContext } from "../UserContext/index";
import { changeReviewAction } from "../../actions/changeReviewAction";

import styles from "./RestaurantContainer.module.scss";

export const RestaurantContainer = ({ restaurant, reviews }) => {
    const restaurantId = restaurant.id;

    const { userId } = useContext(UserContext);

    const [_, addOptimisicReview] = useOptimistic(
        reviews,
        (currentState, opmisticValue) => [
            ...currentState,
            { ...opmisticValue, id: "creating" },
        ]
    );

    const reviewId = reviews.find((review) => {
        return review.user === userId;
    }).id;

    const handleAddReview = useCallback(
        async (state, formData) => {
            if (formData === null) {
                return {
                    text: "",
                    rating: 5,
                };
            }

            const text = formData.get("text");
            const rating = formData.get("rating");

            const review = { text, rating, user: userId };

            addOptimisicReview(review);

            await addReviewAction({ restaurantId, review });

            return {
                text: "default",
                rating: 5,
            };
        },
        [addOptimisicReview, restaurantId, userId]
    );

    const handleUpdateReview = useCallback(
        async (formData) => {
            const text = formData.get("text");
            const rating = formData.get("rating");

            const updatedReview = {
                text,
                rating,
                user: userId
            };

            try {
                await changeReviewAction({ reviewId, review: updatedReview });
            } catch (e) {
                console.error("Update failed", e);
            }
        },
        [reviewId, userId]
    );

    const { name } = restaurant;

    const isUserPostReview = !!reviews.find((review) => {
        return review.user === userId;
    });

    return (
        <Restaurant
            name={name}
            externalClassname={styles.externalClassname}
            submitFormAction={handleAddReview}
            onUpdateReview={handleUpdateReview}
            isUserPostReview={isUserPostReview}
            userId={userId}
        />
    );
};
