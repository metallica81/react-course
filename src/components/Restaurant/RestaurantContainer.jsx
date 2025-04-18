"use client";

import { Restaurant } from "./Restaurant";
import { useCallback, useOptimistic, useContext, useMemo } from "react";
import { addReviewAction } from "../../actions/addReviewAction";
import { useChangeReviewMutation } from "../../Redux/Services/api";
import { UserContext } from "../UserContext/index"

import styles from "./RestaurantContainer.module.scss";

export const RestaurantContainer = ({ restaurant, reviews }) => {
    const restaurantId = restaurant.id;
    const { userId } = useContext(UserContext);

    const [addOptimisicReview] = useOptimistic(
        reviews,
        (currentState, opmisticValue) => [
            ...currentState,
            { ...opmisticValue, id: "creating" },
        ]
    );

    const userReview = useMemo(
        () => reviews.find((r) => r.user === userId),
        [reviews, userId]
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

    const [changeReview] = useChangeReviewMutation();

    const handleUpdateReview = useCallback(
        async (formData) => {
            const text = formData.get("text");
            const rating = formData.get("rating");

            const updatedReview = {
                ...userReview,
                text,
                rating,
            };

            try {
                await changeReview({ review: updatedReview }).unwrap();
            } catch (e) {
                console.error("Update failed", e);
            }
        },
        [changeReview, userReview]
    );

    const { name } = restaurant;

    return (
        <Restaurant
            name={name}
            externalClassname={styles.externalClassname}
            submitFormAction={handleAddReview}
            onUpdateReview={handleUpdateReview}
            userId={userId}
            userReview={userReview}
        />
    );
};
