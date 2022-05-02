import React, { Suspense } from "react";
import ReactDOM from "react-dom";
// store
import { Provider } from "./store";
import App from "./App";

import "./styles/style.css";

ReactDOM.render(
  <Suspense fallback="loading">
    <React.StrictMode>
      <Provider>
        <App />
      </Provider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
