import React, { useContext } from "react";

import { Store, action_next_step } from "../../store";

import styles from "../../styles/createDataset/splitData.module.css";

export default function SplitData() {
  const { dataDispatch } = useContext(Store);
  return (
    <section>
      <div className={`d-flex justify-content-between`}>
        <h5>split data page</h5>
        <button
          className={`${styles.continuButton}`}
          type="button"
          onClick={() => dataDispatch(action_next_step(6))}
        >
          continue
        </button>
      </div>
    </section>
  );
}
