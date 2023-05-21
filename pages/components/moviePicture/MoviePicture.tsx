import React from "react";
import styles from "./MoviePicture.module.css";
import { movieProps } from "../../interfaces/movie";

interface moviePictureProps {
  movie: movieProps;
  setMovieTrailerSelected: (movie: movieProps) => void;
}

const MoviePicture = ({
  movie,
  setMovieTrailerSelected,
}: moviePictureProps) => {
  return (
    <div className={styles.container} onClick={() =>setMovieTrailerSelected(movie)}>
      <img src={movie.image} className={styles.image} />
      <div className={styles.imageOverlayContent}>
        <p className={styles.imageOverlayText}>Click to play a trailer</p>
      </div>
    </div>
  );
};

export default MoviePicture;
