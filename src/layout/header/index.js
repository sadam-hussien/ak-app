import React, { useContext } from "react";

import { Store } from "../../store";

import Logo from "./Logo";

import User from "./User";

import { MenuOpenOutlined } from "@mui/icons-material";

import styles from "../../styles/layout/header.module.css";

export default function Header() {
  const { authStore } = useContext(Store);
  const { auth } = authStore;
  const toggleSideBar = () => {
    const rootEle = document.querySelector(":root");
    const getSidebarWidth = getComputedStyle(
      document.querySelector(".sidebar-container")
    ).width;

    if (getSidebarWidth > "1px") {
      rootEle.style.setProperty("--sidebar-width", "0");
    } else {
      if (window.matchMedia("(max-width: 768px)").matches) {
        rootEle.style.setProperty("--sidebar-width", "100%");
      } else {
        rootEle.style.setProperty("--sidebar-width", "300px");
      }
    }
  };
  return (
    <header
      className={`d-flex align-items-center p-l p-r fixed-top ${styles.header}`}
    >
      <div className="w-100">
        <div
          className={`d-flex justify-content-between align-items-center ${styles.headerContent}`}
        >
          <div className="d-flex align-items-center">
            <button
              onClick={toggleSideBar}
              type="button"
              className={`d-lg-none border-0 p-0 ${styles.toggleSidebar}`}
            >
              <MenuOpenOutlined fontSize="large" />
            </button>
            <Logo />
          </div>
          {auth && <User />}
        </div>
      </div>
    </header>
  );
}
