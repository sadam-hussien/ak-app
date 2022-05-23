import React, { useContext } from "react";

import { Store } from "../../store";

import { creationSteps } from "../../constants";

import styles from "../../styles/layout/sidebar.module.css";

import Styles from "../../styles/createDataset/steps.module.css";

export default function CreateSteps() {
  return (
    <aside className={`${styles.sidebar} sidebar-container`}>
      <div className="container h-100">
        <div className={`${Styles.stepsWrapper}`}>
          <ul className={`list-unstyled m-0 p-0 ${Styles.steps}`}>
            {creationSteps.map((item, index) => (
              <CreateStep key={index} item={item} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}

function CreateStep({ item, index }) {
  const { dataStore } = useContext(Store);
  return (
    <li
      className={`text-capitalize d-flex align-items-center  ${
        Styles.stepItem
      } ${dataStore.active >= index ? Styles.activeStepItem : ""}`}
    >
      {item}
    </li>
  );
}
