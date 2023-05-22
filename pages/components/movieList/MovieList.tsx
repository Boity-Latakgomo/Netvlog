import React from "react";
import styles from "./MovieList.module.css";
import MoviePicture from "../moviePicture/MoviePicture";
import { movieProps } from "../../interfaces/movie";

interface MovieList {
  movies: movieProps[];
}

const MovieList = ({ movies }: MovieList) => {
  return (
    <div className={styles.container}>
      {movies?.map((movie, index) => (
        <div className={styles.innerContainer}>
          <div className={styles.separator}>
            <MoviePicture key={index} movie={movie} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
