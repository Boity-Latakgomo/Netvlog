import React from "react";
import styles from "./PopularContent.module.css";
import MovieList from "../movieList/MovieList";
import { movieProps } from "../../interfaces/movie";

interface IPopularContent{
  movies: movieProps[]
}

const PopularContent = ({movies} : IPopularContent) => {
  return (
    <div className={styles.container}>
      <h2>Watch popular movies</h2>
      <MovieList movies={movies}/>
    </div>
  );
};

export default PopularContent;
