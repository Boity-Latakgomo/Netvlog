import React from "react";
import styles from "./GenreContent.module.css";
import MovieList from "../movieList/MovieList";

const GenreContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <h2>Select Movie Genre</h2>
      <div className={styles.genres}>
        <p>Action</p>
        <p>Adventure</p>
        <p>Comedy</p>
        <p>Romance</p>
        <p>Thriller</p>
        <p>Horror</p>
      </div>
        <MovieList />
      </div>
      ;
    </div>
  );
};

export default GenreContent;
