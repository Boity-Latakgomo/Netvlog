import React from "react";
import styles from "./PopularContent.module.css";
import MovieList from "../movieList/MovieList";

const PopularContent = () => {
  return (
    <div className={styles.container}>
      <h2>Watch popular movies</h2>
      <MovieList />
    </div>
  );
};

export default PopularContent;
