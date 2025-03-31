import styles from './Restaurant.module.scss';
import { Link } from "react-router";
import { Form } from "../Form/Form";

export const Restaurant = ({ name, extenalClassname }) => {

    return (
        <section
            className={styles.section}
        >
            <h2>{name}</h2>
            <div className={extenalClassname}>
                <Link to="menu">Menu</Link>
                <Link to="reviews">Reviews</Link>
            </div>
            <Form />
        </section>
    );
};
