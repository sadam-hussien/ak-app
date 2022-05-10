import React from "react";

import styles from "../../styles/createDataset/tagging.module.css";

export default function TaggingHead({ next, prev }) {
  return (
    <div
      className={`d-flex align-items-center justify-content-between ${styles.taggingHead}`}
    >
      <button
        type="button"
        className={`${styles.sliderBtn}`}
        onClick={() => prev()}
      >
        <span>
          <ion-icon name="arrow-back-outline"></ion-icon>
        </span>
        previous image
      </button>
      <button
        type="button"
        className={`${styles.sliderBtn}`}
        onClick={() => next()}
      >
        next image
        <span>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </span>
      </button>
    </div>
  );
}
