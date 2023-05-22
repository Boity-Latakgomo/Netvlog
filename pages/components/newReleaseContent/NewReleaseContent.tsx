import React from "react";
import styles from "./NewReleaseContent.module.css";
import MovieList from "../movieList/MovieList";
import { movieProps } from "../../interfaces/movie";

interface newReleaseContent {
  movies: movieProps[];
}

const NewReleaseContent = ({ movies }: newReleaseContent) => {
  return (
    <div className={styles.container}>
      <h2>Watch latest moves</h2>
      <MovieList movies={movies}/>
    </div>
  );
};

export default NewReleaseContent;
