import React from "react";
import Raiting from "./Raiting";
const MovieCard = ({ movie }) => {
  return (
    <div
      className="card m-3 border-secondary border-top-0"
      style={{ width: "20%", minWidth: "250px" }}
    >
      <div className="d-flex">
        <img
          src={movie.img}
          className="card-img-top"
          height="300"
          alt="imageFilm"
        />
        <p className="raiting ">
          <Raiting count={movie.raiting} />
        </p>
      </div>
      <div className="card-body">
        <h5 className="card-title text-center ">{movie.title}</h5>
      </div>
    </div>
  );
};
export default MovieCard;
