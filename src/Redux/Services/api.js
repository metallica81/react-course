import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["reviews"],
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => "/restaurants",
    }),
    getRestaurantById: builder.query({
      query: (restaurantId) => `/restaurant/${restaurantId}`,
    }),
    getMenu: builder.query({
      query: (restaurantId) => `dishes?restaurantId=${restaurantId}`,
    }),
    getDishById: builder.query({
      query: (dishId) => `/dishes?dishId=${dishId}`,
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getReviewsById: builder.query({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
    }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        body: review,
        method: "POST",
      })
    }),
  }),
});

export const {
  useGetDishByIdQuery,
  useGetMenuQuery,
  useGetRestaurantsQuery,
  useLazyGetRestaurantsQuery,
  useGetUsersQuery,
  useGetRestaurantByIdQuery,
  useGetReviewsByIdQuery,
  useAddReviewMutation,
} = api;
