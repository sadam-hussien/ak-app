import React, { useContext } from "react";

import { action_next_step, Store } from "../../store";

import styles from "../../styles/createDataset/dataCleaning.module.css";

export default function DataCleaningHead({ changeTab, activeTab }) {
  const { dataStore, dataDispatch } = useContext(Store);
  const handleActiveTab = (tab) => {
    if (activeTab === tab) {
      return styles.dataCleaningHeadTabActive;
    }
    return "";
  };
  return (
    <div
      className={`d-flex align-items-center justify-content-between ${styles.dataCleaningHead}`}
    >
      <div className={`${styles.dataCleaningHeadTabWrapper}`}>
        <button
          type="button"
          onClick={() => changeTab("all")}
          className={`${styles.dataCleaningHeadTab} ${handleActiveTab("all")}`}
        >
          all images ({dataStore.files.length})
        </button>
        <button
          type="button"
          onClick={() => changeTab("annotated")}
          className={`${styles.dataCleaningHeadTab} ${handleActiveTab(
            "annotated"
          )}`}
        >
          annotated images (5)
        </button>
        <button
          type="button"
          onClick={() => changeTab("not_annotated")}
          className={`${styles.dataCleaningHeadTab} ${handleActiveTab(
            "not_annotated"
          )}`}
        >
          not annotated images ({dataStore.files.length - 5})
        </button>
      </div>
      <button
        className={`${styles.continuButton}`}
        type="button"
        onClick={() => dataDispatch(action_next_step(3))}
      >
        continue
      </button>
    </div>
  );
}
