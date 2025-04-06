import { Restaurant } from "./Restaurant";
import {
    useAddReviewMutation,
    useGetRestaurantByIdQuery,
} from "../../Redux/Services/api";
import styles from "./RestaurantContainer.module.scss";

export const RestaurantContainer = ({ id }) => {
    const {
        isError,
        isLoading,
        data: restaurant,
    } = useGetRestaurantByIdQuery(id);

    const [addReview, { isLoading: isAddLoadingReview }] = useAddReviewMutation();


    const handleSubmit = () => {
        addReview(body);
    };
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
            isSubmitButtonDisabled={isAddLoadingReview}
        />
    );
};
