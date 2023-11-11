import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Movie Search App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
