'use client';
import React, { useEffect, useState } from 'react';
import { Review } from 'types';
import Carousel from '../Carousel';

export const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/getReviews');

        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        setReviews(data.result.reviews || []);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <p>Loading…</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex flex-col items-center gap-8 lg:p-8 bg-white frounded-lg w-full ">
      <Carousel>
        {reviews.map((review, index) => (
          <div key={index} className="mt-4 text-center max-w-xl mx-auto px-8">
            <div className="flex justify-center mb-4">
              <div
                className="w-16 h-16 bg-cover bg-center rounded-full"
                style={{
                  backgroundImage: `url(${review.profile_photo_url || 'https://via.placeholder.com/64'})`,
                }}
              ></div>
            </div>
            <div className="mb-4">
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill={i < review.rating ? '#FFD700' : '#E0E0E0'}
                    viewBox="0 0 256 256"
                  >
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                  </svg>
                ))}
              </div>
            </div>
            <blockquote className="italic text-gray-700 text-lg mb-4">
              &quot;{review.text}&quot;
            </blockquote>
            <p className="font-medium text-gray-900">{review.author_name}</p>
            <p className="text-sm text-gray-500">
              {new Date(review.time * 1000).toLocaleDateString()}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
