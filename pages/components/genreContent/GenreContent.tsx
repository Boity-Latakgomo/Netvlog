import React from "react";
import styles from "./GenreContent.module.css";
import MovieList from "../movieList/MovieList";
import { movieProps } from "../../interfaces/movie";
import { Genre } from "../../../utils/genres";

interface IGenreContentProps {
  movies: movieProps[];
  changeGenre: (selectedGenre: Genre) => void;
  genreSelected: Genre;
}

const GenreContent = ({
  movies,
  changeGenre,
  genreSelected,
}: IGenreContentProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <h2>Select Movie Genre</h2>
        <div className={styles.genres}>
          <div>
            <p onClick={() => changeGenre(Genre.All)}>All</p>
            {genreSelected === Genre.All ? (
              <div className={styles.line} />
            ) : null}
          </div>
          <div>
            <p onClick={() => changeGenre(Genre.Action)}>Action</p>
            {genreSelected === Genre.Action ? (
              <div className={styles.line} />
            ) : null}
          </div>
          <div>
            <p onClick={() => changeGenre(Genre.Comedy)}>Comedy</p>
            {genreSelected === Genre.Comedy ? (
              <div className={styles.line} />
            ) : null}
          </div>
          <div>
            <p onClick={() => changeGenre(Genre.Romance)}>Romance</p>
            {genreSelected === Genre.Romance ? (
              <div className={styles.line} />
            ) : null}
          </div>
          <div>
            <p onClick={() => changeGenre(Genre.Horror)}>Horror</p>
            {genreSelected === Genre.Horror ? (
              <div className={styles.line} />
            ) : null}
          </div>
        </div>
        <MovieList movies={movies} />
      </div>
      ;
    </div>
  );
};

export default GenreContent;
