import styles from "./Restaurant.module.scss";
import { Form } from "../Form/Form";
import { TabLink } from "../TabRestorauntContainer/TabLink";

export const Restaurant = ({
    name,
    externalClassname,
    onSubmit,
    isSubmitButtonDisabled,
    handleButtonText,
}) => {
    return (
        <section className={styles.section}>
            <h2>{name}</h2>
            <div className={externalClassname}>
                <TabLink to="menu">Menu</TabLink>
                <TabLink to="reviews">Reviews</TabLink>
            </div>
            <Form
                onSubmit={onSubmit}
                isSubmitButtonDisabled={isSubmitButtonDisabled}
                handleButtonText={handleButtonText}
            />
        </section>
    );
};
