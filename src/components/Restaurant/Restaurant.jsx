import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";
import styles from './Restaurant.module.scss';
import { CartContainer } from "../Cart/CartContainer";
import { Link } from "react-router";
import { Form } from "../Form/Form";

export const Restaurant = ({ name, menu, reviews }) => {

    return (
        <section
            className={styles.section}
        >
            <h2>{name}</h2>
            <div style={{ display: "flex", gap: "5px" }}>
                <Link to="menu">Menu</Link>
                <Link to="reviews">Reviews</Link>
            </div>

            <Form />
            <CartContainer />
        </section>
    );
};
