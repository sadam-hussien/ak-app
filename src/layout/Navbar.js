import React from "react";

import { NavLink } from "react-router-dom";

import styles from "../styles/layout/nav.module.css";

const links = [
  {
    link: "datasets",
    icon: <ion-icon name="layers-outline"></ion-icon>,
    subLinks: ["my datasets", "public datasets"],
  },
  {
    link: "models",
    icon: <ion-icon name="analytics-outline"></ion-icon>,
    subLinks: ["my models", "public models"],
  },
  {
    link: "learning resources",
    icon: <ion-icon name="book-outline"></ion-icon>,
    subLinks: [
      "youtube videos",
      "frequentely asked question",
      "knowlodge base",
    ],
  },
];

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

      <ul className="list-unstyled m-0 p-0">
        {links.map((item, index) => (
          <li key={index} className={`text-capitalize ${styles.linkItem}`}>
            <span className={`text-capitalize ${styles.link}`}>
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.text}>{item.link}</span>
            </span>
            <ul className={`list-unstyled m-0 ${styles.linksInner}`}>
              {item.subLinks.map((i, idx) => (
                <li key={idx} className={`${styles.linkItemInner}`}>
                  {i}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
