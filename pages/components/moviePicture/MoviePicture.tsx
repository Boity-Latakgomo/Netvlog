import React from "react";
import styles from "./MoviePicture.module.css";
import { movieProps } from "../../interfaces/movie";
import Link from "next/link";

interface moviePictureProps {
  movie: movieProps;
  setMovieTrailerSelected?: (movie: movieProps) => void;
}

{
  /* <Link href={{ pathname: '/page2', query: data }}></Link> */
}

const MoviePicture = ({
  movie,
  setMovieTrailerSelected,
}: moviePictureProps) => {
  if (setMovieTrailerSelected) {
    return (
      <div
        className={styles.container}
        onClick={() => setMovieTrailerSelected(movie)}
      >
        <img src={movie.image} className={styles.image} />
        <div className={styles.imageOverlayContent}>
          <p className={styles.imageOverlayText}>Click to play a trailer</p>
        </div>
      </div>
    );
  } else {
    return (
      <Link
        href={{
          pathname: "/trailer",
          query: {
            title: movie.title,
            genre: movie.genre,
            duration: movie.duration,
            starring: movie.starring,
            image: movie.image,
            trailer: movie.trailer,
            video: movie.video,
            views: movie.views,
            releaseDate: movie.releaseDate.getDate(),
          },
        }}
        className={styles.container}
      >
        <img src={movie.image} className={styles.image} />
        <div className={styles.imageOverlayContent}>
          <p className={styles.imageOverlayText}>Click to play a trailer</p>
        </div>
      </Link>
    );
  }
};

export default MoviePicture;
