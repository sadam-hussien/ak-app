import React, { useContext } from "react";

import { Store } from "../../store";

import Uploader from "./Uploader";

import styles from "../../styles/createDataset/upload.module.css";

const boxes = [
  {
    icon: <ion-icon name="earth-outline"></ion-icon>,
    title: "public dataset",
    content: "choose from a collection of publicy available dataset",
    url: "",
  },
  {
    icon: <ion-icon name="logo-google-playstore"></ion-icon>,
    title: "marketplace dataset",
    content:
      "choose from a collection of dataset available on our marketplace for free",
    url: "",
  },
];

export default function Upload({ name }) {
  const { dataStore } = useContext(Store);
  return (
    <section className={`${styles.upload}`}>
      <h5 className={`text-capitalize ${styles.datasetName}`}>
        dataset name: <span>{dataStore.name || name}</span>
      </h5>

      <div className={`${styles.uploadArea}`}>
        <Uploader />
      </div>

      <div className={`${styles.uploadFooter}`}>
        <h6 className={`text-capitalize text-center ${styles.neddimagesTitle}`}>
          need images to get started? we got you covered!
        </h6>
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="row g-4 flex-sm-nowrap justify-content-between">
              {boxes.map((item, index) => (
                <div
                  key={index}
                  className={`col-sm-5 text-center ${styles.uploadImageBox}`}
                >
                  <h6
                    className={`text-capitalize d-flex justify-content-center align-items-center ${styles.uploadImageBoxTitle}`}
                  >
                    <span>{item.icon}</span>
                    {item.title}
                  </h6>
                  <p className={`m-0 ${styles.uploadImageBoxContent}`}>
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
