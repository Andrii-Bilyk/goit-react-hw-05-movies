import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActorsOfMovie } from 'Api/Api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const castData = await fetchActorsOfMovie(movieId);
        setCast(castData.cast);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  if (!cast) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            {actor.profile_path ? (
              <>
                <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                <p>Name: {actor.name}</p>
                <p>Character: {actor.character}</p>
                <p>ID: {actor.id}</p>
              </>
            ) : (
              <>
                <p>Name: {actor.name}</p>
                <p>Character: {actor.character}</p>
                <p>ID: {actor.id}</p>
                <p>No photo available</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
