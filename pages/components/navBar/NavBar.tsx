import React from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";

interface INavBar {
  popUpVisibility?: (value: boolean) => void;
}

const NavBar = ({ popUpVisibility }: INavBar) => {
  return (
    <div className={styles.container}>
      <Link
        href=""
        onClick={() => {
          window.location.href = "/trailer";
        }}
      >
        <p>
          Net<span className={styles.vlogText}>Vlog</span>
        </p>
      </Link>
      <div className={styles.containerNav}>
        <Link
          href=""
          onClick={() => {
            window.location.href = "/trailer";
          }}
        >
          Home
        </Link>

        <Link href="/newRelease">New Release</Link>
        <Link href="/genres">Genres</Link>
        <Link href="/popular">Popular</Link>
      </div>
      <div
        className={styles.imageContainer}
        onClick={() => popUpVisibility(true)}
      >
        <img
          src="https://icon-library.com/images/logout-icon-png/logout-icon-png-3.jpg"
          alt="logout"
        />
      </div>
    </div>
  );
};

export default NavBar;
