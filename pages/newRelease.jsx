import React, { useState } from "react";
import NavBar from "./components/navBar/NavBar";
import styles from "./components/styles.module.css";
import NewReleaseContent from "./components/newReleaseContent/NewReleaseContent";
import { movies } from "../utils/demoMovieData";
import LogoutPopUp from "./components/logoutPopUp/LogoutPopUp";

const months = 5;

function NewReleasePage() {
  const currentDate = new Date();
  const fiveMonthsAgo = new Date();
  const [showLogoutPopUp, setShowLogoutPopUp] = useState(false);
  fiveMonthsAgo.setMonth(fiveMonthsAgo.getMonth() - months);

  const popUpVisibility = (value) => setShowLogoutPopUp(value);

  const recentMovies = movies.filter(
    (movie) => movie.releaseDate >= fiveMonthsAgo
  );
  return (
    <div className={styles.container}>
      <NavBar popUpVisibility={popUpVisibility} />
      {showLogoutPopUp && <LogoutPopUp popUpVisibility={popUpVisibility} />}
      <NewReleaseContent movies={recentMovies} />
    </div>
  );
}

export default NewReleasePage;
