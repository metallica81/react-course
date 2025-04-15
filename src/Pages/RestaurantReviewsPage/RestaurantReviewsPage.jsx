export function RestaurantReviewsPage({ reviews }) {
    return (
        <>
            <h3>Отзывы</h3>
            <ul>
                {reviews.map(({id, text}) => {
                    return (
                        Boolean(text) && (
                            <li key={id}>{text}</li>
                        )
                    );
                })}
            </ul>
        </>
    );
}
