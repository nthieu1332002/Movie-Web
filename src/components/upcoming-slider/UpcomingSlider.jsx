import { Link } from "react-router-dom";
import React from "react";
import "swiper/css";
import Slider from "../slider/Slider";

const UpcomingSlider = () => {
  return (
    <>
      <div className="similar">
        <h2>Upcoming movies</h2>
        <Link to="/movies">
          <button className="view-more">View more</button>
        </Link>
      </div>
      <Slider type="upcoming" />
    </>
  );
};


export default UpcomingSlider;
