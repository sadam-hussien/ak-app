import React from "react";

import { NavLink } from "react-router-dom";

import styles from "../styles/layout/nav.module.css";

const links = [
  {
    link: "datasets",
    icon: <ion-icon name="layers-outline"></ion-icon>,
    subLinks: [
      { label: "my datasets", url: "/data1" },
      { label: "public datasets", url: "/data2" },
    ],
  },
  {
    link: "models",
    icon: <ion-icon name="analytics-outline"></ion-icon>,
    subLinks: [
      { label: "my models", url: "/data99" },
      { label: "public models", url: "/data3" },
    ],
  },
  {
    link: "learning resources",
    icon: <ion-icon name="book-outline"></ion-icon>,
    subLinks: [
      { label: "youtube videos", url: "/data9" },
      { label: "frequentely asked question", url: "/data4" },
      { label: "knowlodge base", url: "data5" },
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
                <NavLink
                  to={i.url}
                  key={idx}
                  // className={`${styles.linkItemInner}`}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.activeLink} ${styles.linkItemInner}`
                      : styles.linkItemInner
                  }
                >
                  {i.label}
                </NavLink>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
