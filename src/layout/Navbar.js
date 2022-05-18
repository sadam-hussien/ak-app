import React from "react";

import { NavLink } from "react-router-dom";

import {
  LayersOutlined,
  BoltOutlined,
  MenuBookOutlined,
  HomeOutlined,
} from "@mui/icons-material";

import styles from "../styles/layout/nav.module.css";

const links = [
  {
    link: "datasets",
    icon: <LayersOutlined />,
    subLinks: [
      { label: "my datasets", url: "/datasets" },
      { label: "public datasets", url: "/public-datasets" },
    ],
  },
  {
    link: "models",
    icon: <BoltOutlined />,
    subLinks: [
      { label: "my models", url: "/models" },
      { label: "public models", url: "/public-models" },
    ],
  },
  {
    link: "learning resources",
    icon: <MenuBookOutlined />,
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
          <HomeOutlined />
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
