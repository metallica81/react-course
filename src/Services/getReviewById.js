export const getReviewById = async (restaurantId) => {
    const result = await fetch(
        `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`,
        {
            next: {
                tags: ["getReviewById"],
            },
        }
    );

    return result.json();
};
