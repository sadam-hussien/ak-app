import React, { useContext, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import {
  Store,
  action_next_step,
  action_finish_dataset,
  action_reset_dataset,
} from "../../store";

import { AlertToast } from "../global";

import { CloudUploadOutlined } from "@mui/icons-material";

import { server_create_dataset } from "../../server/datasets";

import Styles from "../../styles/createDataset/finalize.module.css";

export default function FinalizeHead() {
  const { state } = useLocation();

  const navigate = useNavigate();

  const { dataDispatch, dataStore, authStore } = useContext(Store);

  const [loading, setLoading] = useState(false);

  const finishDataset = () => {
    const totalClasses = () => {
      let count = 0;
      dataStore.annotated.map((item) => (count += item.tags.length));
      return count;
    };
    const data = {
      // Owner: authStore.user.user_id,
      // DatasetName: dataStore.name || state?.name,
      // DatasetTag: dataStore.tag.join(","),
      // DataSplit: `${dataStore.splitData.training}:${dataStore.splitData.validation}:${dataStore.splitData.test}`,
      // TotalImages: dataStore.files.length,
      // TotalClasses: totalClasses(),
      // IsDeleted: false,
      // DataConfig: null,
      Owner: 12,
      DatasetName: "Test",
      DatasetTag: "Classification",
      DataSplit: "12:12:34",
      IsDeleted: false,
      TotalImages: 1,
      TotalClasses: 1,
      DataConfig: null,
    };
    setLoading(true);
    server_create_dataset(data)
      .then((res) => {
        dataDispatch(
          action_finish_dataset({
            name: dataStore.name || state?.name,
            tags: [dataStore.tag],
            id: Math.random(),
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
      })
      .then(() => {
        AlertToast("success", "dataset created successfully");
        dataDispatch(action_reset_dataset());
      })
      .then(() => {
        navigate("/datasets");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        AlertToast("error", "error ocured, please try again later");
      });
    // new Promise((resolve) => {
    //   setTimeout(() => {
    //     dataDispatch(
    //       action_finish_dataset({
    //         name: dataStore.name || state?.name,
    //         tags: [dataStore.tag],
    //         id: Math.random(),
    //         metadata: {
    //           owner: "mahmoud",
    //           images: 200,
    //           a_images: 199,
    //           classes: 3,
    //         },
    //         files: dataStore.files,
    //         splitData: dataStore.splitData,
    //       })
    //     );
    //     resolve();
    //   }, 500);
    // })
    //   .then(() => {
    //     AlertToast("success", "dataset created successfully");
    //     dataDispatch(action_reset_dataset());
    //   })
    //   .then(() => {
    //     navigate("/datasets");
    //   })
    //   .catch((err) => {
    //     AlertToast("error", "error ocured, please try again later");
    //   });
  };

  return (
    <div
      className={`d-flex justify-content-between align-items-center flex-wrap`}
      style={{ gap: "20px" }}
    >
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
