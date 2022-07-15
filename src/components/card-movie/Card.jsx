import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({ posterPath, item }) => {
  return (
    <Link to={"/detail/" + item.id}>
      <div className="card-movie">
        <div className="card-movie-image">
          <h3>{item.vote_average}</h3>
          <img src={posterPath} alt={item.title}></img>
        </div>
        <p>{item.title}</p>
      </div>
    </Link>
  );
};

export default Card;
