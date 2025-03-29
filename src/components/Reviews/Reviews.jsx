import { Form } from "../Form/Form";
import { Review } from "./Review";

export function Reviews({ reviewsIds }) {

    return (
        <>
            <h3>Отзывы</h3>
            <ul>
                {reviewsIds.map((reviewsIds) => {
                    return <Review key={reviewsIds} reviewsIds={reviewsIds} />
                })}
            </ul>
            
            <Form />
        </>
    );
}
