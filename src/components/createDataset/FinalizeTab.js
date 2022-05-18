import React from "react";

import styles from "../../styles/createDataset/dataCleaning.module.css";

export default function FinalizeTab({ activeTab, changeTab }) {
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
          onClick={() => changeTab("training")}
          className={`${styles.dataCleaningHeadTab} ${handleActiveTab(
            "training"
          )}`}
        >
          train set - images (40)
        </button>
        <button
          type="button"
          onClick={() => changeTab("testing")}
          className={`${styles.dataCleaningHeadTab} ${handleActiveTab(
            "testing"
          )}`}
        >
          test set - images (5)
        </button>
        <button
          type="button"
          onClick={() => changeTab("validation")}
          className={`${styles.dataCleaningHeadTab} ${handleActiveTab(
            "validation"
          )}`}
        >
          validation set - images (10)
        </button>
      </div>
    </div>
  );
}
