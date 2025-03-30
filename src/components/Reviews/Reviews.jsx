import { Form } from "../Form/Form";
import { ReviewListItem } from "./ReviewListItem";

export function Reviews({ reviewsIds }) {

    return (
        <>
            <h3>Отзывы</h3>
            <ul>
                {reviewsIds.map((reviewsId) => {
                    return <ReviewListItem key={reviewsId} reviewsId={reviewsId} />
                })}
            </ul>
            
            <Form />
        </>
    );
}
