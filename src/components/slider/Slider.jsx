import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "./Slider.scss"
import Card from "../card-movie/Card";

const Slider = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      let url = "";
      switch (props.type) {
        case "upcoming":
          url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
          break;
        case "similar":
          url = `https://api.themoviedb.org/3/movie/${props.id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
          break;
        case "top-rated":
          url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
          break;
        default:
          url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
      }

      const api = await fetch(url);
      const data = await api.json();
      setMovies(data.results);
    };
    getMovies();
  }, [props.id, props.type]);

  return (
    <div className="swipper-wrapper">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          601: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1025: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={10}
        scrollbar={{ draggable: true }}
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
      >
        {movies.map((item) => {
          const posterPath = `https://image.tmdb.org/t/p/original${item.poster_path}`;
          return (
            <SwiperSlide key={item.id}>
              <Card item={item} posterPath={posterPath} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
