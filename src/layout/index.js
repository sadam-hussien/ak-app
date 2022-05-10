import React from "react";

import { useLocation } from "react-router-dom";

import Header from "./header";

import SideBar from "./sidebar";

import { CreateSteps } from "../components/createDataset";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  return (
    <div className="row flex-nowrap g-0 overflow-hidden">
      {!["/login", "/register"].includes(pathname) && (
        <div className="sidebar">
          {["/create-database"].includes(pathname) ? (
            <CreateSteps />
          ) : (
            <SideBar />
          )}
        </div>
      )}
      <div className="col page-content">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
