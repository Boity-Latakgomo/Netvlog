import React, { useState } from "react";
import NavBar from "./components/navBar/NavBar";
import styles from "./components/styles.module.css";
import GenreContent from "./components/genreContent/GenreContent";
import { movies } from "../utils/demoMovieData";
import { Genre } from "../utils/genres";
import { movieProps } from "./interfaces/movie";

let filteredMovies: movieProps[];

const GenresPage = () => {
  const [genreSelected, SetGenreSelected] = useState<Genre>(Genre.All);

  const changeGenre = (selectedGenre: Genre) => {
    SetGenreSelected(selectedGenre);
  };

  switch (genreSelected) {
    case Genre.Action:
      filteredMovies = movies.filter(
        (movie) =>
          movie.genre.toLocaleLowerCase() === Genre.Action.toLocaleLowerCase()
      );
      break;
    case Genre.Adventure:
      filteredMovies = movies.filter(
        (movie) =>
          movie.genre.toLocaleLowerCase() ===
          Genre.Adventure.toLocaleLowerCase()
      );
      break;
    case Genre.Comedy:
      filteredMovies = movies.filter(
        (movie) =>
          movie.genre.toLocaleLowerCase() === Genre.Comedy.toLocaleLowerCase()
      );
      break;
    case Genre.Romance:
      filteredMovies = movies.filter(
        (movie) =>
          movie.genre.toLocaleLowerCase() === Genre.Romance.toLocaleLowerCase()
      );
      break;
    case Genre.Thriller:
      filteredMovies = movies.filter(
        (movie) =>
          movie.genre.toLocaleLowerCase() === Genre.Thriller.toLocaleLowerCase()
      );
      break;
    case Genre.Horror:
      filteredMovies = movies.filter(
        (movie) =>
          movie.genre.toLocaleLowerCase() === Genre.Horror.toLocaleLowerCase()
      );
      break;
    default:
      filteredMovies = movies;
  }
  return (
    <div className={styles.container}>
      <NavBar />
      <GenreContent movies={filteredMovies} changeGenre={changeGenre}/>
    </div>
  );
};

export default GenresPage;
