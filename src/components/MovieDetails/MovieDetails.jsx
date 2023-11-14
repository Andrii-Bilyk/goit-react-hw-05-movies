import React, { useEffect, useState, useRef, Suspense } from 'react';
import { useParams, useNavigate, Link, Outlet, useLocation} from 'react-router-dom';
import { fetchInformationMovie } from 'Api/Api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await fetchInformationMovie(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);



  const handleGoBack = () => {
    navigate(goBackRef.current);
  };

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const { poster_path, title, release_date, vote_average, overview, genres } = movieDetails;

  return (
    <div>
      <button onClick={handleGoBack}>Go Back</button>
      {poster_path&&<img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />}
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
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
