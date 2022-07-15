import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "./Swiper.scss";

import MainSlideItem from "./MainSlideItem";
const MainSlider = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const api = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );

      const data = await api.json();
      setMovies(data.results.slice(0, 4));
    };
    getMovies();
  }, []);

  return (
    <>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 5000 }}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
      >
        {movies.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <MainSlideItem item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default MainSlider;
