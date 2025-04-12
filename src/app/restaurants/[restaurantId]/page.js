import { redirect } from 'next/navigation';

const RestaurantPageWrapper = async ({ params }) => {
  const { restaurantId } = await params;

  redirect(`/restaurants/${restaurantId}/menu`);
};

export default RestaurantPageWrapper;
