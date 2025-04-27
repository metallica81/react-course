import { redirect } from 'next/navigation';

export const generateStaticParams = async () => {
  return [
    { restaurantId: 'bb8afbec-2fec-491f-93e9-7f13950dd80b' },
    { restaurantId: 'd9241927-09e1-44f3-8986-a76346869037' },
  ];
};

const RestaurantPageWrapper = async ({ params }) => {
  const { restaurantId } = await params;

  redirect(`/restaurants/${restaurantId}/menu`);
};

export default RestaurantPageWrapper;
