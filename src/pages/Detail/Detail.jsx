import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CasterList from "../../components/caster/CasterList";
import Slider from "../../components/slider/Slider";
import Trailer from "../../components/trailer/Trailer";
import "./Detail.scss";

const Detail = () => {
  let params = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const getDetails = async () => {
      const api = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      const data = await api.json();
      setDetails(data);
    };
    getDetails();
  }, [params.id]);

  return (
    <>
      <div className="container">
        <img
          className="background-poster"
          src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
          alt={params.title}
        />
        <div className="content">
          <div className="movie-detail-img">
            <img
              src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
              alt={details.title}
            />
          </div>
          <div className="movie-detail">
            <div className="movie-detail-title-wrapper">
              <div className="movie-detail-title">
                <h1>{details.title}</h1>
                <p className="genres">
                  {details.genres?.map((item) => {
                    return (
                      <span key={item.id} className="genres-border">
                        {item.name}
                      </span>
                    );
                  })}
                </p>
              </div>
              <div className="movie-duration">
                <h4>{details.runtime} min</h4>
              </div>
            </div>
            <p className="movie-detail-overview">
              {`${details.overview?.length}` > 500
                ? `${details.overview.substring(0, 500)}...`
                : `${details.overview}`}
            </p>
            <div className="movie-detail-caster">
              <h3>Casters</h3>
              <CasterList id={params.id} />
            </div>
          </div>
        </div>
      </div>
      <Trailer id={params.id} />
      <Similar>Similar movies</Similar>
      <Slider id={params.id} type="similar" />
    </>
  );
};

const Similar = styled.h2`
  margin: 1rem 5rem;
  color: #12c6b2;
`;
export default Detail;
