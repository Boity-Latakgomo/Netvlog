import React from "react";
import NavBar from "./components/navBar/NavBar";
import styles from "./components/styles.module.css";
import GenreContent from "./components/genreContent/GenreContent";

const GenresPage = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <GenreContent />
    </div>
  );
};

export default GenresPage;
