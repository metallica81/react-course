"use client";

import { Restaurant } from "./Restaurant";
import { useCallback, useOptimistic } from "react";
import { addReviewAction } from "../../actions/addReviewAction";
import styles from "./RestaurantContainer.module.scss";

export const RestaurantContainer = ({ restaurant, reviews }) => {
    const restaurantId = restaurant.id;

    const [optimisticReview, addOptimisicReview] = useOptimistic(
        reviews,
        (currentState, opmisticValue) => [
            ...currentState,
            { ...opmisticValue, id: "creating" },
        ]
    );

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

            const review = { text, rating, user: "asdasdoi29tu384f" };

            addOptimisicReview(review);

            await addReviewAction({ restaurantId, review });

            return {
                text: "default",
                rating: 5,
            };
        },
        [addOptimisicReview, restaurantId]
    );

    if (!optimisticReview.length) {
        return null;
    }

    const { name } = restaurant;

    return (
        <Restaurant
            name={name}
            externalClassname={styles.externalClassname}
            reviews={optimisticReview}
            submitFormAction={handleAddReview}
        />
    );
};
