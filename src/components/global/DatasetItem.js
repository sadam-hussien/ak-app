import React from "react";

import { Link } from "react-router-dom";

import { dateHandler } from "../../constants";

import styles from "../../styles/global/datasetItem.module.css";

export default function DatasetItem({ data }) {
  return (
    <div className={`${styles.datasetItem}`}>
      <div className={`${styles.img} position-relative`}>
        {/* {data.file && (
          <img
            src={window.URL.createObjectURL(data.file)}
            alt={data.filename}
            className="img-fluid w-100 h-100"
          />
        )} */}
        <div className="dropdown">
          <button
            type="button"
            className={`dropdown-toggle p-0 m-0 border-0 ${styles.datasetList}`}
            id="dropdownDatasetList"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul
            className={`dropdown-menu ${styles.datalistmenu}`}
            aria-labelledby="dropdownDatasetList"
          >
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`${styles.datasetContent} text-center`}>
        <h5 className={`${styles.datasetTitle} text-capitalize`}>
          {data.name}
        </h5>
        <span
          className={`${styles.datasetUpdated} d-flex align-items-center justify-content-center text-center text-capitalize`}
        >
          <span>last edited:</span>
          <span>{dateHandler(new Date())}</span>
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
