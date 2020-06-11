import React from "react";

const Raiting = ({ count, onChangeRating = () => {} }) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    i < count
      ? stars.push(
          <span
            key={i}
            onClick={() => {
              onChangeRating(i + 1);
            }}
            style={{ cursor: "pointer" }}
          >
            ★
          </span>
        )
      : stars.push(
          <span
            key={i}
            onClick={() => {
              onChangeRating(i + 1);
            }}
            style={{ cursor: "pointer" }}
          >
            ☆
          </span>
        );
  }
  return <div>{stars}</div>;
};
export default Raiting;
