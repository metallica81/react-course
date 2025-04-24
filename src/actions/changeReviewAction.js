'use server';

import { revalidateTag } from 'next/cache';

export async function changeReviewAction({ reviewId, review }) {

  const result = await fetch(
    `http://localhost:3001/api/review/${reviewId}`,
    {
      method: 'PATCH',
      body: JSON.stringify(review),
      headers: { 'Content-Type': 'application/json' },
    }
  );

  const response = await result.json();

  revalidateTag('getReviews');
  
  return response;
}

