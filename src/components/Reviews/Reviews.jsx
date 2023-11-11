import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsOfMovie } from 'Api/Api';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviewsOfMovie(movieId).then((data) => {
      setReviews(data.results);
    });
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
