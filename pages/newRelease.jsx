import React from "react";
import NavBar from "./components/navBar/NavBar";
import styles from "./components/styles.module.css";
import NewReleaseContent from "./components/newReleaseContent/NewReleaseContent";
import { movies } from "../utils/demoMovieData";

const months = 5;

function NewReleasePage() {
  const currentDate = new Date();
  const fiveMonthsAgo = new Date();
  fiveMonthsAgo.setMonth(fiveMonthsAgo.getMonth() - months);

  const recentMovies = movies.filter(
    (movie) => movie.releaseDate >= fiveMonthsAgo
  );
  return (
    <div className={styles.container}>
      <NavBar />
      <NewReleaseContent movies={recentMovies} />
    </div>
  );
}

export default NewReleasePage;
