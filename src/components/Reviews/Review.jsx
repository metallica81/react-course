export function Review({ reviews }) {
    return (
        <>
            <h3>Отзывы</h3>
            <ul>
                {reviews.map((reviews) => {
                    return (
                        Boolean(reviews.text) && (
                            <li key={reviews.id}>{reviews.text}</li>
                        )
                    );
                })}
            </ul>
        </>
    );
}
