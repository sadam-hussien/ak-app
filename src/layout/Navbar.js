import React from "react";

import { NavLink } from "react-router-dom";

import styles from "../styles/layout/nav.module.css";

export default function Navbar() {
  const activeLink = (isActive) => {
    const classes = `text-capitalize ${styles.link}`;
    return isActive ? `${styles.activeLink} ${classes}` : classes;
  };

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={({ isActive }) => activeLink(isActive)}>
        <span className={styles.icon}>
          <ion-icon name="home-outline"></ion-icon>
        </span>
        <span>home</span>
      </NavLink>

      <NavLink
        to="/databases"
        className={({ isActive }) => activeLink(isActive)}
      >
        <span className={styles.icon}>
          <ion-icon name="layers-outline"></ion-icon>
        </span>
        <span>datasets</span>
      </NavLink>
      <NavLink
        to="/databases"
        className={({ isActive }) => activeLink(isActive)}
      >
        <span className={styles.icon}>
          <ion-icon name="analytics-outline"></ion-icon>
        </span>
        <span>models</span>
      </NavLink>
      <NavLink
        to="/databases"
        className={({ isActive }) => activeLink(isActive)}
      >
        <span className={styles.icon}>
          <ion-icon name="book-outline"></ion-icon>
        </span>
        <span>learning resources</span>
      </NavLink>
    </nav>
  );
}
