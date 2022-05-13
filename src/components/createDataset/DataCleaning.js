import React, { useState, useContext } from "react";

import { Store } from "../../store";

import DataCleaningHead from "./DataCleaningHead";

import Uploader from "./Uploader";

import DataCleaningImage from "./DataCleaningImage";

import styles from "../../styles/createDataset/dataCleaning.module.css";

export default function DataCleaning() {
  // store
  const { dataStore } = useContext(Store);
  const [activeTab, setActiveTab] = useState("all");
  const changeTab = (tab) => setActiveTab(tab);

  return (
    <section className={`${styles.dataCleaning}`}>
      {/* head */}
      <DataCleaningHead changeTab={changeTab} activeTab={activeTab} />
      <Uploader dataCleaning />
      {/* all  */}
      {activeTab === "all" ? (
        <div className={`row row-cols-5 gy-4 ${styles.dataCleaningWrappers}`}>
          {dataStore.files.map((file) => (
            <div className="col" key={file.id}>
              <DataCleaningImage file={file} />
            </div>
          ))}
        </div>
      ) : activeTab === "annotated" ? (
        <div className={`row row-cols-5 gy-4 ${styles.dataCleaningWrappers}`}>
          {dataStore.annotated.map((file) => (
            <div className="col" key={file.id}>
              <DataCleaningImage file={file} />
            </div>
          ))}
        </div>
      ) : (
        <div className={`row row-cols-5 gy-4 ${styles.dataCleaningWrappers}`}>
          {dataStore.files
            .filter((f) => !f.tags)
            .map((file) => (
              <div className="col" key={file.id}>
                <DataCleaningImage file={file} />
              </div>
            ))}
        </div>
      )}
    </section>
  );
}
