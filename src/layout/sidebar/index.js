import React from "react";

import Navbar from "../Navbar";

import { NavLink } from "react-router-dom";

import { ArrowCircleLeftOutlined } from "@mui/icons-material";

import styles from "../../styles/layout/sidebar.module.css";

export default function SideBar() {
  return (
    <aside className={`sidebar-container ${styles.sidebar}`}>
      <div className="container h-100">
        <div className={`h-100 d-flex flex-column ${styles.sidebarContent}`}>
          <NavLink to="/" className={`${styles.toggleSidebar}`}>
            <ArrowCircleLeftOutlined />
          </NavLink>
          <Navbar />
        </div>
      </div>
    </aside>
  );
}
