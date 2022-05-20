import React, { useContext, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import {
  Store,
  action_next_step,
  action_finish_edit_dataset,
  action_reset_dataset,
} from "../../store";

import { AlertToast } from "../global";

import { CloudUploadOutlined } from "@mui/icons-material";

import Styles from "../../styles/createDataset/finalize.module.css";

export default function FinalizeHead() {
  const { state } = useLocation();

  const navigate = useNavigate();

  const { dataDispatch, dataStore } = useContext(Store);

  const [loading, setLoading] = useState(false);

  const finishDataset = () => {
    new Promise((resolve) => {
      setLoading(true);
      setTimeout(() => {
        dataDispatch(
          action_finish_edit_dataset({
            name: dataStore.name || state?.name,
            tags: [dataStore.tag],
            id: dataStore.id,
            metadata: {
              owner: "mahmoud",
              images: 200,
              a_images: 199,
              classes: 3,
            },
            files: dataStore.files,
            splitData: dataStore.splitData,
          })
        );
        resolve();
      }, 500);
    })
      .then(() => {
        AlertToast("success", "dataset editing successfully");
        dataDispatch(action_reset_dataset());
      })
      .then(() => {
        navigate("/datasets");
      })
      .catch((err) => {
        AlertToast("error", "error ocured, please try again later");
      });
  };

  return (
    <div className={`d-flex justify-content-between align-items-center`}>
      <h5 className={`text-capitalize m-0 ${Styles.datasetName}`}>
        dataset name: <span>{dataStore.name || state?.name}</span>
      </h5>
      <div className="d-flex align-items-center">
        <button
          className={`${Styles.continuButton} continueButton text-capitalize`}
          type="button"
          onClick={() => dataDispatch(action_next_step(1))}
        >
          edit dataset
        </button>
        <button
          className={`${Styles.continuButton} continueButton text-capitalize`}
          type="button"
          onClick={finishDataset}
        >
          {loading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <span>
              <CloudUploadOutlined />
              <span className={Styles.btnText}>save dataset</span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
