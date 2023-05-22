import React from "react";
import styles from "./GenreContent.module.css";
import MovieList from "../movieList/MovieList";
import { movieProps } from "../../interfaces/movie";
import { Genre } from "../../../utils/genres";

interface IGenreContentProps {
  movies: movieProps[];
  changeGenre: (selectedGenre: Genre) => void;
}

const GenreContent = ({ movies, changeGenre }: IGenreContentProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <h2>Select Movie Genre</h2>
        <div className={styles.genres}>
          <p onClick={() => changeGenre(Genre.All)}>All</p>
          <p onClick={() => changeGenre(Genre.Action)}>Action</p>
          <p onClick={() => changeGenre(Genre.Adventure)}>Adventure</p>
          <p onClick={() => changeGenre(Genre.Comedy)}>Comedy</p>
          <p onClick={() => changeGenre(Genre.Romance)}>Romance</p>
          <p onClick={() => changeGenre(Genre.Thriller)}>Thriller</p>
          <p onClick={() => changeGenre(Genre.Horror)}>Horror</p>
        </div>
        <MovieList movies={movies} />
      </div>
      ;
    </div>
  );
};

export default GenreContent;
