import React, { useEffect, useState, useContext } from "react";

import { useParams } from "react-router-dom";

import { action_toggle_modal, Store } from "../store";

import { Head, Modal, PlaceholderLoader } from "../components/global";

import { EditDataset } from "../components/editDataset";

import { modal_add_dataset } from "../constants";

import { useFetcher } from "../hooks";

import { server_get_dataset_item } from "../server/datasets";

import styles from "../styles/dataset/index.module.css";

export default function DatasetDetails() {
  const { id } = useParams();

  const { globalDispatch, globalStore } = useContext(Store);

  const { fetchItems: item } = useFetcher({
    callback: server_get_dataset_item,
    id: id,
  });

  const numberOfClasses = () => {
    let count = 0;
    if (item) {
      item.DataConfig?.files.map((item) => {
        if (item.tags) {
          count += item.tags.length;
        }
      });
    }
    return count;
  };
  const numberOfAnnotated = () => {
    let count = 0;
    if (item) {
      item.DataConfig?.files.map((item) => {
        if (item.tags) {
          count += 1;
        }
      });
    }
    return count;
  };

  // loading
  if (!item) {
    return <PlaceholderLoader />;
  }

  return (
    <section className="p-l p-r p-b p-t">
      <Head title={item.DatasetName} />

      {/* items  */}
      <div className="row g-5 ">
        <div className="col-md-7">
          {/* box  */}
          <div className={`${styles.detailsBox} d-flex align-items-center`}>
            <h5 className={`m-0 text-capitalize ${styles.detailsTitle}`}>
              dataset name:
            </h5>
            <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
              {item.DatasetName}
            </h6>
          </div>

          {/* box  */}
          <div className={`${styles.detailsBox} d-flex align-items-center`}>
            <h5 className={`m-0 text-capitalize ${styles.detailsTitle}`}>
              dataset tags:
            </h5>
            <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
              {item.DatasetTag}
            </h6>
          </div>

          {/* box  */}
          <div className={`${styles.detailsBox}`}>
            <h5
              className={`m-0 text-capitalize ${styles.detailsTitle} ${styles.metadata}`}
            >
              dataset metadata:
            </h5>
            <div>
              <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
                owner - {item?.Owner?.UserName}
              </h6>
              <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
                Training/Test/Validation Split - {item.DataSplit}
              </h6>
              <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
                total number of images - {item?.DataConfig?.files.length}
              </h6>
              <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
                annotaed images - {numberOfAnnotated()}
              </h6>
              <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
                number of unique classes - {numberOfClasses()}
              </h6>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className={`${styles.datasetImgDetails} position-relative`}>
            {item.files && (
              <img
                src={window.URL.createObjectURL(item.files[0].file)}
                alt={item.name}
                className="img-fluid w-100 h-100"
              />
            )}
            <h5 className={`${styles.datasetImgTitle} text-capitalize`}>
              dataset display image
            </h5>
          </div>
        </div>
      </div>

      <button
        onClick={() =>
          globalDispatch(
            action_toggle_modal({
              comp: modal_add_dataset,
              id: id,
              name: item.DatasetName,
              tag: item.DatasetTag,
              item: item,
            })
          )
        }
        type="button"
        className={`our-btn d-inline-flex ${styles.editBtn} text-capitalize border-0`}
      >
        edit this dataset
      </button>

      {globalStore.modalStatus.isActive && (
        <Modal title={`edit dataset - ${item.DatasetName}`}>
          <EditDataset />
        </Modal>
      )}
    </section>
  );
}
