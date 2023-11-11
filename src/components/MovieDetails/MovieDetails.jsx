import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchInformationMovie, fetchActorsOfMovie, fetchReviewsOfMovie } from 'Api/Api';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState(null);
  const [reviews, setReviews] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await fetchInformationMovie(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    const fetchMovieCast = async () => {
      try {
        const castData = await fetchActorsOfMovie(movieId);
        setCast(castData.cast);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    };

    const fetchMovieReviews = async () => {
      try {
        const reviewsData = await fetchReviewsOfMovie(movieId);
        setReviews(reviewsData.results);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };

    fetchMovieDetails();
    fetchMovieCast();
    fetchMovieReviews();
  }, [movieId]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!movieDetails || !reviews) {
    return <div>Loading...</div>;
  }

  const { poster_path, title, release_date, vote_average, overview, genres } = movieDetails;

  return (
    <div>
      <button onClick={handleGoBack}>Go Back</button>
      <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />
      <h1>{title}</h1>
      <p>Release Date: {release_date}</p>
      {vote_average ? (
        <p>User Score: {Math.round(vote_average * 10)}%</p>
      ) : (
        <p>User Score: N/A</p>
      )}
      {overview && <h3>Overview</h3>}
      {overview ? <p>{overview}</p> : null}
      {genres && <h3>Genres</h3>}
      {genres ? (
        <ul>
          {genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      ) : null}
      <h2>Additional Information</h2>
      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        {cast && <Cast cast={cast} />}
        {reviews && <Reviews reviews={reviews} />}
      </Suspense>
    </div>
  );
};

export default MovieDetails;
