import React, { useContext } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import {
  Store,
  action_next_step,
  action_finish_dataset,
  action_reset_dataset,
} from "../../store";

import styles from "../../styles/createDataset/finalize.module.css";

export default function SplitData() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { dataDispatch, dataStore } = useContext(Store);

  console.log(dataStore.files);
  const finishDataset = () => {
    new Promise((resolve) => {
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
        })
      );
      resolve();
    })
      .then(() => {
        dataDispatch(action_reset_dataset());
      })
      .then(() => {
        navigate("/datasets");
      });
  };
  return (
    <section>
      <div className={`d-flex justify-content-between`}>
        <h5>finalize page</h5>
        <div>
          <button
            className={`${styles.continuButton}`}
            type="button"
            onClick={() => dataDispatch(action_next_step(1))}
          >
            edit dataset
          </button>
          <button
            className={`${styles.continuButton}`}
            type="button"
            onClick={finishDataset}
          >
            finish
          </button>
        </div>
      </div>
    </section>
  );
}
