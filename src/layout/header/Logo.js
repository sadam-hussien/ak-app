import React from "react";

import { Link } from "react-router-dom";

import styles from "../../styles/layout/header.module.css";

export default function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      {/* <img
        src="/assets/imgs/global/logo.svg"
        alt="logo"
        className="img-fluid"
      /> */}
      logo
    </Link>
  );
}
