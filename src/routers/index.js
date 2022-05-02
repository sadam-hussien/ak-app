import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// routes array
import { routes } from "./routes";

import Protected from "./Protected";

import Layout from "../layout";

export default function Routering() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map(({ isProtected, path, Component, id }) =>
            isProtected ? (
              <Route
                key={id}
                path={path}
                element={
                  <Protected>
                    <Component />
                  </Protected>
                }
              />
            ) : (
              <Route key={id} path={path} element={<Component />} />
            )
          )}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
