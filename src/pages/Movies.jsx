import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../components/card-movie/Card";
import { useParams } from "react-router-dom";

const Movies = () => {
  let params = useParams();
  const [movies, setMovies] = useState([]);
  const [showMore, setShowMore] = useState(1);
  console.log(params.keyword)
  useEffect(() => {
    const getMovies = async (showMore) => {
      let url = "";
      if (params.keyword === "all") {
        url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${showMore}`;
      } else {
        url =`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${showMore}&query=${params.keyword}`;
      }

      const api = await fetch(url);
      const data = await api.json();
      setMovies(data.results);
    };
    getMovies();
  }, [showMore, params.keyword]);

  useEffect(() => {
    const handleShowMore = async () => {
      const api = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${showMore}`
      );
      const data = await api.json();
      setMovies([...movies, ...data.results]);
    };
    handleShowMore();
  }, [showMore]);

  return (
    <Container>
      <h1>All movies</h1>
      <Grid>
        {movies.map((item) => {
          const posterPath = `https://image.tmdb.org/t/p/original${item.poster_path}`;
          return (
            <Card key={item.id} posterPath={posterPath} item={item}></Card>
          );
        })}
      </Grid>
      <Button>
        <button onClick={() => setShowMore((showMore) => showMore + 1)}>
          Load more
        </button>
      </Button>
    </Container>
  );
};
const Container = styled.div`
  margin: 5%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1rem;
  padding-top: 1rem;
`;

const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    background-color: transparent;
    color: #12c6b2;
    font-size: 1rem;
    border: 2px solid #12c6b2;
    border-radius: 0.3rem;
    padding: 0.3rem 0.5rem;
    cursor: pointer;
    &:hover {
      color: white;
      background-color: #12c6b2;
    }
  }
`;

export default Movies;
