import React from "react";
import styles from "./MostViewed.module.css";
import MoviePicture from "../moviePicture/MoviePicture";
import { movieProps } from "../../interfaces/movie";

interface mostViewedProps {
  latestMovies: movieProps[];
  setMovieTrailerSelected: (movie: movieProps) => void;
}

const MostViewed = ({
  latestMovies,
  setMovieTrailerSelected,
}: mostViewedProps) => {
  return (
    <div className={styles.container}>
      <h2>Most Viewed</h2>
      <div className={styles.mostViewed}>
        {latestMovies.map((movie, index) => (
          <div className={styles.innerContainer}>
            <div className={styles.divider} />
            <MoviePicture
              key={index}
              movie={movie}
              setMovieTrailerSelected={setMovieTrailerSelected}
            />
          </div>
        ))}
        <div className={styles.divider} />
      </div>
    </div>
  );
};

export default MostViewed;
