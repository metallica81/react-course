import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Review";

export const Restaurant = ({ restaurant }) => {
    const { name, menu, reviews } = restaurant;

    return (
        <section
            style={{ border: "solid 1px white", padding: "8px" }}
        >
            <h2>{name}</h2>
            {!!menu.length && <Menu menu={menu} />}
            {!!reviews.length && <Reviews reviews={reviews} />}
            {!!menu.length && <Menu menu={menu} />}
            {!!reviews.length && <Reviews reviews={reviews} />}
            {!!menu.length && <Menu menu={menu} />}
            {!!reviews.length && <Reviews reviews={reviews} />}
        </section>
    );
};
