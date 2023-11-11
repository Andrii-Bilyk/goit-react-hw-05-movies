import React from 'react';

const ListFilms = ({ films }) => {
  return (
    <ul>
      {films.map((film) => (
        <li key={film.id}>{film.title}</li>
      ))}
    </ul>
  );
};

export default ListFilms;
