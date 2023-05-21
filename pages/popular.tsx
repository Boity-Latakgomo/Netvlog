import React from "react";
import NavBar from "./components/navBar/NavBar";
import styles from "./components/styles.module.css";
import PopularContent from "./components/popularContent/PopularContent";

const PopularPage = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <PopularContent />
    </div>
  );
};

export default PopularPage;
