import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Trailer = (props) => {
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    const getTrailers = async () => {
      const api = await fetch(
        `https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      const data = await api.json();
      setTrailers(data.results.slice(0, 3));
    };
    getTrailers();
  }, [props.id]);
  return (
    <>
      {trailers.map((item) => {
        return (
          <Video key={item.key}>
            <p className="trailer-title">{item.name}</p>
            <iframe
              src={`https://www.youtube.com/embed/${item.key}`}
              title="trailer"
            ></iframe>
          </Video>
        );
      })}
    </>
  );
};

const Video = styled.div`
  margin: 2rem 5rem;
  .trailer-title {
    font-size: 1.5rem;
    font-weight: 500;
    color: #12c6b2;
  }
  iframe {
    width: 100%;
    height: 700px;
  }
`;

export default Trailer;
