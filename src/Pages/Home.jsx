import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovie } from '../Api/Api';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovie().then((data) => {
      setTrendingMovies(data.results);
    });
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
