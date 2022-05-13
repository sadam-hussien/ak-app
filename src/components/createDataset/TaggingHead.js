import React from "react";

import { ArrowBackOutlined, ArrowForwardOutlined } from "@mui/icons-material";

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
          <ArrowBackOutlined />
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
          <ArrowForwardOutlined />
        </span>
      </button>
    </div>
  );
}
