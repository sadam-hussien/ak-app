import React, { useContext, useState } from "react";

import {
  Store,
  action_next_step,
  action_split_data,
  action_toggle_modal,
} from "../../store";

import { AlertToast } from "../global";

import { Slider } from "@mui/material";

import styles from "../../styles/createDataset/splitData.module.css";

export default function SplitData() {
  const { dataDispatch, globalDispatch } = useContext(Store);
  const starterValue = 0;
  const endValue = 100;

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  const [loading, setLoading] = useState(false);

  const handleChange = (e, newValue) => {
    setMin(newValue[0]);
    setMax(newValue[1]);
  };

  const saveDataset = () => {
    setLoading(true);
    new Promise((resolve) => {
      setTimeout(() => {
        dataDispatch(
          action_split_data({
            training: min - starterValue,
            test: endValue - max,
            validation: max - min,
          })
        );
        resolve();
      }, 300);
    })
      .then(() => {
        AlertToast("success", "dataset splited successfully");
        dataDispatch(action_next_step(4));
        globalDispatch(action_toggle_modal({ comp: null }));
      })
      .catch((err) => {
        AlertToast("error", "error ocured, please try again later");
      });
  };
  // onClick={() => dataDispatch(action_next_step(4))}

  return (
    <section className={`${styles.splitData}`}>
      <div className={`${styles.splitDataArea}`}>
        <div className={`${styles.splitDataLabels}`}>
          <div className="row g-4">
            <div className="col-4 text-center">
              <h5 className="text-capitalize m-0">
                train {min - starterValue}%
              </h5>
            </div>
            <div className="col-4 text-center">
              <h5 className="text-capitalize m-0">validation {max - min}%</h5>
            </div>
            <div className="col-4 text-center">
              <h5 className="text-capitalize m-0">test {endValue - max}%</h5>
            </div>
          </div>
        </div>
        <Slider
          getAriaLabel={() => "split data"}
          value={[min, max]}
          min={starterValue}
          max={endValue}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
        <div className={`${styles.splitDataSave} d-flex justify-content-end`}>
          <button
            type="button"
            className={`our-btn ${styles.saveBtn}`}
            onClick={saveDataset}
          >
            {loading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "save dataset"
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
