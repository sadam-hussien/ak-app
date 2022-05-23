import React, { useState, useContext } from "react";

import { Store } from "../../store";

import FinalizeHead from "./FinalizeHead";

import FinalizeTab from "./FinalizeTab";

import DataCleaningImage from "./DataCleaningImage";

import Styles from "../../styles/createDataset/finalize.module.css";

import styles from "../../styles/createDataset/dataCleaning.module.css";

export default function Finalize() {
  const { dataStore } = useContext(Store);
  const [activeTab, setActiveTab] = useState("training");
  const changeTab = (tab) => setActiveTab(tab);

  return (
    <section className={`${Styles.finalize}`}>
      <FinalizeHead />
      <div className={`${Styles.finalizeTabs}`}>
        <FinalizeTab changeTab={changeTab} activeTab={activeTab} />
      </div>

      <div className={`${Styles.finalizeImages}`}>
        {activeTab === "training" && (
          <div
            className={`row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 gy-4 ${styles.dataCleaningWrappers}`}
          >
            {dataStore.files.map((file) => (
              <div className="col" key={file.id}>
                <DataCleaningImage file={file} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
