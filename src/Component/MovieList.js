import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ movies = [], onAddMovie = () => {} }) => {
  return (
    <div>
      <div className="d-flex justify-content-center flex-wrap mt-5 ">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
export default MovieList;
