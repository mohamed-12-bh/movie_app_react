import React from "react";
import Raiting from "./Raiting";
const NavBar = ({ count, onChangeRatingNew, changeValueFilter = () => {} }) => {
  return (
    <div className="d-flex justify-content-arround align-items-center">
      <div className="input-group mb-3 p-3 w-60">
        <input
          className="form-control "
          type="text"
          placeholder="Searche..."
          onChange={(event) => {
            changeValueFilter(event.target.value);
          }}
        />
      </div>
      <div className="w-51 " style={{ textAlign: "center" }}>
        <span>Minimun raiting</span>
        <Raiting
          count={count}
          onChangeRating={(indice) => {
            onChangeRatingNew(indice);
          }}
        />
      </div>
    </div>
  );
};
export default NavBar;
