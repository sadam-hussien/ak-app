import React from "react";

import styles from "../../styles/global/loader.module.css";

export default function PlaceholderLoader({ classes }) {
  return (
    <div className="row g-4">
      {[1, 2, 3].map((item, index) => (
        <div
          className={`${classes ? classes : "col-md-6 col-lg-4"}`}
          key={index}
        >
          <div className={`h-100 ${styles.placeHolder}`}></div>
        </div>
      ))}
    </div>
  );
}

export function Loading({ style }) {
  return (
    <div className={`${styles.loading}`}>
      <div
        className="spinner-border spinner-border-lg"
        style={style}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
