import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainSlideItem = ({ item }) => {
  const navigate = useNavigate();
  const backdropPath = `https://image.tmdb.org/t/p/original${item.backdrop_path}`;
  const posterPath = `https://image.tmdb.org/t/p/original${item.poster_path}`;

  const handleClick = (id) => {
    navigate("/detail/" + id);
  };

  return (
    <div className="main-slider">

        <img className="background-slider" src={backdropPath} alt="12" />

      <div className="slider-item">
        <div className="movie-info">
          <h1 className="movie-title">{item.title}</h1>
          <p className="movie-description">{item.overview}</p>
          <div className="movie-action">
            <button
              className="movie-watch-now"
              onClick={() => handleClick(item.id)}
            >
              Watch now
            </button>
          </div>
        </div>
        <div className="movie-poster">
          <img src={posterPath} alt={item.title} />
        </div>
      </div>
    </div>
  );
};

export default MainSlideItem;
