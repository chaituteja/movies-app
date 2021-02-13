import React from "react";
import Movie from "../Movie/Movie";
import "./MovieList.css";

const MovieList = ({ movies }) => {
  const renderList = movies.map((movie, index) => {
    return <Movie key={index} movie={movie} />;
  });
  return (
    <div className="movie-list">
      <div className="row">{renderList}</div>
    </div>
  );
};

export default MovieList;
