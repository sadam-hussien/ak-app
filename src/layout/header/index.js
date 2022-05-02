import React, { useContext } from "react";

import { Store } from "../../store";

import Logo from "./Logo";

import User from "./User";

import styles from "../../styles/layout/header.module.css";

export default function Header() {
  const { authStore } = useContext(Store);
  const { auth } = authStore;
  return (
    <header
      className={`d-flex align-items-center p-l p-r fixed-top ${styles.header}`}
    >
      <div className="w-100">
        <div
          className={`d-flex justify-content-between align-items-center ${styles.headerContent}`}
        >
          <Logo />
          {auth && <User />}
        </div>
      </div>
    </header>
  );
}
