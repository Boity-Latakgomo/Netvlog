import React from "react";
import styles from "./logoutPopUp.module.css";

interface ILogoutPopUp {
  popUpVisibility?: (value: boolean) => void;
}

const LogoutPopUp = ({ popUpVisibility }: ILogoutPopUp) => {
  const onLogout = () => {
    popUpVisibility(false);
    window.location.href = "/authentication";
  };
  return (
    <div className={styles.container}>
      <div className={styles.circle}>B</div>
      <p>Latakgomo Boity</p>
      <div className={styles.line} />
      <p className={styles.logoutText} onClick={() => onLogout()}>
        logout
      </p>
    </div>
  );
};

export default LogoutPopUp;
