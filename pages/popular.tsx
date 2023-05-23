import React, { useEffect } from "react";
import NavBar from "./components/navBar/NavBar";
import styles from "./components/styles.module.css";
import PopularContent from "./components/popularContent/PopularContent";
import { movies } from "../utils/demoMovieData";
import { useMovie } from "../providers/movies";

const targetView = 30000;

const PopularPage = () => {
  const {fetchMovies,moviesFetched} = useMovie()

  
  useEffect(() => {
    fetchMovies() 
  }, [])
  
  if (!moviesFetched) {
    return <div>loading...!!!</div>
  }
  const popularMovies = moviesFetched.filter((movie) => parseInt(movie.view) >= targetView);
  
  return (
    <div className={styles.container}>
      <NavBar />
      <PopularContent movies={popularMovies} />
    </div>
  );
};

export default PopularPage;
