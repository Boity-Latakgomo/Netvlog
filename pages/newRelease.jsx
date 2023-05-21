import React from "react";
import NavBar from "./components/navBar/NavBar";
import styles from "./components/styles.module.css";
import NewReleaseContent from './components/newReleaseContent/NewReleaseContent'

function NewReleasePage() {
  return (
    <div className={styles.container}>
      <NavBar />
      <NewReleaseContent />
    </div>
  );
}

export default NewReleasePage;
