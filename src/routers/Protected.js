import React, { useContext } from "react";

import { Store } from "../store";

import { useLocation, Navigate } from "react-router-dom";

export default function Protected({ children }) {
  // get auth from store
  const { authStore } = useContext(Store);
  const { auth } = authStore;
  // // get location
  const { pathname } = useLocation();

  // if not logged in
  if (!auth && ["/login", "/register"].includes(pathname)) {
    return children;
  }

  if (!auth) {
    return <Navigate to="/login" state={{ from: pathname }} />;
  }

  return children;
}
