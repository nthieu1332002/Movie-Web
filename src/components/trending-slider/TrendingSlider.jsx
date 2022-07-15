import { Link } from "react-router-dom";
import React from "react";
import "swiper/css";
import Slider from "../slider/Slider";
import "./TrendingSlider.scss"

const TrendingSlider = () => {
  return (
    <>
      <div className="similar">
        <h2>Trending movies</h2>
        <Link to="/movies/all">
          <button className="view-more">View more</button>
        </Link>
      </div>
      <Slider />
    </>
  );
};

export default TrendingSlider;
