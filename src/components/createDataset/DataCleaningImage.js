import React, { useContext } from "react";

import { Store, action_remove_file, action_toggle_modal } from "../../store";

import { modal_tagging } from "../../constants";

import { DeleteForeverOutlined } from "@mui/icons-material";

import styles from "../../styles/createDataset/dataCleaning.module.css";

export default function DataCleaningImage({ file }) {
  const { dataDispatch, globalDispatch } = useContext(Store);
  return (
    <div
      className={`${styles.dataCleaningImgItem} position-relative d-flex align-items-center justify-content-center`}
    >
      <div
        className={`text-center w-100`}
        style={{ cursor: "pointer" }}
        onClick={() =>
          globalDispatch(
            action_toggle_modal({ comp: modal_tagging, path: file.path })
          )
        }
      >
        <img src={file.path} alt={file.file_name} className={`img-fluid`} />
        <span className={`${styles.dataCleaningImgItemTitle}`}>
          {file.file_name}
        </span>
      </div>
      <button
        onClick={() => dataDispatch(action_remove_file(file.path))}
        className={`${styles.dataCleaningImgItemDelete} position-absolute`}
      >
        <DeleteForeverOutlined />
      </button>
    </div>
  );
}
