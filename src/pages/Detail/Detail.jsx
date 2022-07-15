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

// const Container = styled.div`
//   position: relative;
//   .background-poster {
//     width: 100%;
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     filter: brightness(30%);
//   }
// `;

// const Content = styled.div`
//   display: flex;
//   position: absolute;
//   top: 0;
//   // background: yellow;
//   margin: 10rem;
//   .movie-detail {
//     .movie-duration {
//       color: #12c6b2;
//     }
//     .movie-detail-title-wrapper {
//       display: flex;
//     }
//     .movie-detail-title {
//       width: 90%;
//       min-height: 7rem;
//       h1 {
//         font-size: 2.5rem;
//         color: #12c6b2;
//       }
//     }
//     .genres {
//       font-size: 0.8rem;
//       font-weight: 400;
//       letter-spacing: 0.1rem;
//       color: #12c6b2;
//       .genres-border {
//         display: inline-block;
//         padding: 0.2rem 0.4rem;
//         border: 2px solid #12c6b2;
//         border-radius: 1rem;
//         margin-right: 0.5rem;
//         margin-bottom: 0.5rem;
//       }
//     }

//     .movie-detail-overview {
//       font-size: 1rem;
//       font-weight: 400;
//       letter-spacing: 0.05rem;
//       margin-bottom: 1rem;
//       .read-more {
//         color: red;
//       }
//     }
//     .movie-detail-caster {
//       position: absolute;
//       bottom: 0;
//       h3 {
//         color: #12c6b2;
//       }
//     }
//   }
//   .movie-detail-img {
//     width: 100%;
//     margin-right: 2rem;
//     img {
//       width: 100%;
//       height: 100%;
//       background-position: center;
//       background-repeat: no-repeat;
//       background-size: cover;
//       border-radius: 0.8rem;
//     }
//   }
// `;

const Similar = styled.h2`
  margin: 1rem 5rem;
  color: #12c6b2;
`;
export default Detail;
