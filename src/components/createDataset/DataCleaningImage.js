import React, { useContext } from "react";

import { Store, action_remove_file } from "../../store";

import { Link } from "react-router-dom";

import styles from "../../styles/createDataset/dataCleaning.module.css";

export default function DataCleaningImage({ file }) {
  const { dataDispatch } = useContext(Store);
  return (
    <div
      className={`${styles.dataCleaningImgItem} position-relative d-flex align-items-center justify-content-center`}
    >
      <Link to={`/create-database/${file.id}`} className={`text-center w-100`}>
        <img
          src={window.URL.createObjectURL(file.file)}
          alt={file.filename}
          className={`img-fluid`}
        />
        <span className={`${styles.dataCleaningImgItemTitle}`}>
          {file.filename}
        </span>
      </Link>
      <button
        onClick={() => dataDispatch(action_remove_file(file.id))}
        className={`${styles.dataCleaningImgItemDelete} position-absolute`}
      >
        <ion-icon name="trash-outline"></ion-icon>
      </button>
    </div>
  );
}
