import React from "react";

import { Link } from "react-router-dom";

import { dateHandler } from "../../constants";

import styles from "../../styles/global/datasetItem.module.css";

export default function DatasetItem({ data }) {
  return (
    <div className={`${styles.datasetItem}`}>
      <div className={`${styles.img}`}></div>

      <div className={`${styles.datasetContent} text-center`}>
        <h5 className={`${styles.datasetTitle} text-capitalize`}>
          {data.title}
        </h5>
        <span
          className={`${styles.datasetUpdated} d-flex align-items-center justify-content-center text-center text-capitalize`}
        >
          <span>last edited:</span>
          <span>{dateHandler(data.updated_at)}</span>
        </span>
        <Link
          to={`/datasets/${data.id}`}
          className={`our-btn border-0 text-capitalize ${styles.datasetBtn}`}
        >
          details
        </Link>
      </div>
    </div>
  );
}
