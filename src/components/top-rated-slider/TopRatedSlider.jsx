import { Link } from "react-router-dom";
import React from "react";
import "swiper/css";
import Slider from "../slider/Slider";

const TopRatedSlider = () => {
  return (
    <>
      <div className="similar">
        <h2>Top rated movies</h2>
        <Link to="/toprated">
          <button className="view-more">View more</button>
        </Link>
      </div>
      <Slider type="top-rated" />
    </>
  );
};

export default TopRatedSlider;
