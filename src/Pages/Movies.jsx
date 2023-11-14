import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from '../Api/Api';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
const location = useLocation()
  const handleSearch = useCallback((query) => {
    if (query.trim() !== '') {
      fetchSearchMovie(query).then((data) => {
        setSearchResults(data.results);
        setSearchParams({ query });
      });
    }
  }, [setSearchParams]);

  useEffect(() => {
    const queryParam = searchParams.get('query');
    if (queryParam) {
      setSearchQuery(queryParam);
      handleSearch(queryParam);
    }
  }, [searchParams, handleSearch]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch(searchQuery);
    }
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={() => handleSearch(searchQuery)}>Search</button>

      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>
            <Link state={{from:location}} to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
