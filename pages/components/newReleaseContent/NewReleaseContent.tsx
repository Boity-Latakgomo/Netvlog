import React from "react";
import styles from './NewReleaseContent.module.css'
import MovieList from '../movieList/MovieList';

const NewReleaseContent = () => {
  return <div className={styles.container}>
    <h2>Watch latest moves</h2>
    <MovieList />
  </div>;
};

export default NewReleaseContent;
