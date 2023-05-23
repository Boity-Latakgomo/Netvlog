import React from "react";
import NavBar from "./components/navBar/NavBar";
import styles from "./components/styles.module.css";
import PopularContent from "./components/popularContent/PopularContent";
import { movies } from "../utils/demoMovieData";

const targetView = 30000;

const PopularPage = () => {
  const popularMovies = movies.filter((movie) => movie.views >= targetView);
  
  return (
    <div className={styles.container}>
      <NavBar />
      <PopularContent movies={popularMovies} />
    </div>
  );
};

export default PopularPage;
