import React from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link href="/trailer">
        <p>
          Net<span className={styles.vlogText}>Vlog</span>
        </p>
      </Link>
      <div className={styles.containerNav}>
        <Link href="/trailer">Home</Link>
        <Link href="/newRelease">New Release</Link>
        <Link href="/genres">Genres</Link>
        <Link href="/popular">Popular</Link>
      </div>
    </div>
  );
};

export default NavBar;
