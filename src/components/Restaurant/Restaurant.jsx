import styles from "./Restaurant.module.scss";
import { Form } from "../Form/Form";
import { TabLink } from "../TabRestorauntContainer/TabLink";
import { UserContext } from "../UserContext";
import { use } from "react";

export const Restaurant = ({
    name,
    externalClassname,
    reviews,
    submitFormAction
}) => {
    const { isAuth } = use(UserContext);
    
    return (
        <section className={styles.section}>
            <h2>{name}</h2>
            <div className={externalClassname}>
                <TabLink to="menu">Menu</TabLink>
                <TabLink to="reviews">Reviews</TabLink>
            </div>
            {isAuth && <Form
                submitFormAction={submitFormAction}
            />}
        </section>
    );
};
