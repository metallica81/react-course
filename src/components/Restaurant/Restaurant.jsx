import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";
import styles from './Restaurant.module.scss';
import { CartContainer } from "../Cart/CartContainer";

export const Restaurant = ({ name, menu, reviews }) => {

    return (
        <section
            className={styles.section}
        >
            <h2>{name}</h2>
            {!!menu.length && <Menu menu={menu} />}
            {!!reviews.length && <Reviews reviewsIds={reviews} />}
            <CartContainer />
            {!!menu.length && <Menu menu={menu} />}
            {!!reviews.length && <Reviews reviewsIds={reviews} />}
            {!!menu.length && <Menu menu={menu} />}
            {!!reviews.length && <Reviews reviewsIds={reviews} />}
        </section>
    );
};
