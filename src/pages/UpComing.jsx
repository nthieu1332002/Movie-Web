import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from '../components/card-movie/Card'

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [showMore, setShowMore] = useState(1);

  useEffect(() => {
    const getMovies = async (showMore) => {
      const api = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${showMore}`
      );
      const data = await api.json();
      setMovies(data.results);
    };
    getMovies();
  }, [showMore]);

  useEffect(() => {
    const handleShowMore = async () => {
      const api = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${showMore}`
      );
      const data = await api.json();
      setMovies([...movies, ...data.results]);
    };
    handleShowMore();
  }, [showMore]);
  console.log(movies);

  return (
    <Container>
      <h1>Upcoming movies</h1>
      <Grid>
        {movies.map((item) => {
          const posterPath = `https://image.tmdb.org/t/p/original${item.poster_path}`;
          return (
            <Card key={item.id} posterPath={posterPath} item={item}>

            </Card>
          );
        })}
      </Grid>
      <Button>
        <button onClick={() => setShowMore((showMore) => showMore + 1)}>Load more</button>
      </Button>
    </Container>
  );
};
const Container = styled.div`
  margin:  5%;
`

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
