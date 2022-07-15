import React, { useState, useEffect } from "react";
import styled from "styled-components";
const CasterList = (props) => {

  const [caster, setCaster] = useState([]);
  useEffect(() => {
    const getCasters = async () => {
      const api = await fetch(
        `https://api.themoviedb.org/3/movie/${props.id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      const data = await api.json();
      setCaster(data.cast.slice(0, 5));
    };
    getCasters();
  }, [props.id]);
  
  return (
    <>
    <CasterWrapper>
      {caster.map((item) => {
        return (
          <div className="caster-card" key={item.id}>
            <img src={`https://image.tmdb.org/t/p/original${item.profile_path}`} alt={item.name}/>
            <p>{item.name}</p>
          </div>
        )
      })}
    </CasterWrapper>
    </>
  );
};

const CasterWrapper = styled.div`
  display: flex;
  .caster-card {
    flex: 1;
    margin-right: 1rem;
    text-align: center;
  }
  .caster-card img{
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0.8rem;
    filter: brightness(80%);
    &:hover {
      filter: brightness(100%);
    }
  }
`;

export default CasterList;
