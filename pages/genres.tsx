import React, { useEffect, useState } from "react";
import NavBar from "./components/navBar/NavBar";
import styles from "./components/styles.module.css";
import GenreContent from "./components/genreContent/GenreContent";
//import { movies } from "../utils/demoMovieData";
import { Genre } from "../utils/genres";
import { movieProps } from "./interfaces/movie";
import { useMovie } from "../providers/movies";
import LogoutPopUp from "./components/logoutPopUp/LogoutPopUp";

let filteredMovies: movieProps[];

const GenresPage = () => {
  const [genreSelected, SetGenreSelected] = useState<Genre>(Genre.All);
  const { fetchMovies, moviesFetched } = useMovie();

  const [showLogoutPopUp, setShowLogoutPopUp] = useState(false);

  const popUpVisibility = (value: boolean) => setShowLogoutPopUp(value);

  useEffect(() => {
    fetchMovies();
  }, []);

  if (!moviesFetched) {
    return <div>loading...!!!</div>;
  }
  const changeGenre = (selectedGenre: Genre) => {
    SetGenreSelected(selectedGenre);
  };

  switch (genreSelected) {
    case Genre.Action:
      filteredMovies = moviesFetched.filter(
        (movie) =>
          movie.genre.toLocaleLowerCase() === Genre.Action.toLocaleLowerCase()
      );
      break;
    case Genre.Adventure:
      filteredMovies = moviesFetched.filter(
        (movie) =>
          movie.genre.toLocaleLowerCase() ===
          Genre.Adventure.toLocaleLowerCase()
      );
      break;
    case Genre.Comedy:
      filteredMovies = moviesFetched.filter(
        (movie) =>
          movie.genre.toLocaleLowerCase() === Genre.Comedy.toLocaleLowerCase()
      );
      break;
    case Genre.Romance:
      filteredMovies = moviesFetched.filter(
        (movie) =>
          movie.genre.toLocaleLowerCase() === Genre.Romance.toLocaleLowerCase()
      );
      break;
    case Genre.Thriller:
      filteredMovies = moviesFetched.filter(
        (movie) =>
          movie.genre.toLocaleLowerCase() === Genre.Thriller.toLocaleLowerCase()
      );
      break;
    case Genre.Horror:
      filteredMovies = moviesFetched.filter(
        (movie) =>
          movie.genre.toLocaleLowerCase() === Genre.Horror.toLocaleLowerCase()
      );
      break;
    default:
      filteredMovies = moviesFetched;
  }
  return (
    <div className={styles.container}>
      <NavBar popUpVisibility={popUpVisibility} />
      {showLogoutPopUp && <LogoutPopUp popUpVisibility={popUpVisibility} />}
      <GenreContent
        genreSelected={genreSelected}
        movies={filteredMovies}
        changeGenre={changeGenre}
      />
    </div>
  );
};

export default GenresPage;
