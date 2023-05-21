import React from "react";
import styles from "./MovieList.module.css";
import MoviePicture from "../moviePicture/MoviePicture";

const numbers: number[] = [];

const movieTest = {
  title: "Kate",
  trailer: "MysGjRS9jFU",
  duration: "2h30",
  genre: "Action",
  image:
    "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Kate_%28film%29.jpg/220px-Kate_%28film%29.jpg",
  releaseDate: new Date(2021, 4, 18),
  starring: "Kate",
  video: "",
  views: 30000,
};

const MovieList = () => {
  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }
  return (
    <div className={styles.container}>
      {numbers.map((movie, index) => (
        <div className={styles.innerContainer}>
          <div className={styles.separator}>
            <MoviePicture
              key={index}
              movie={movieTest}
              setMovieTrailerSelected={() => {}}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
