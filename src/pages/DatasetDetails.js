import React, { useEffect, useState, useContext } from "react";

import { useParams } from "react-router-dom";

import { action_toggle_modal, Store } from "../store";

import { Head, Modal } from "../components/global";

import { EditDataset } from "../components/editDataset";

import { modal_add_dataset } from "../constants";

import styles from "../styles/dataset/index.module.css";

export default function DatasetDetails() {
  const { id } = useParams();

  const { dataStore, globalDispatch, globalStore } = useContext(Store);

  // fetch single item
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (dataStore.files) {
      const filter = dataStore.datasets.filter(
        (item) => parseInt(item.id) === parseInt(id)
      );
      setItem(...filter);
    }
  }, [id, dataStore.files]);

  // loading
  if (!item) {
    return "loading...";
  }
  return (
    <section className="p-l p-r p-b p-t">
      <Head title={item.name} />

      {/* items  */}
      <div className="row g-5 ">
        <div className="col-6">
          {/* box  */}
          <div className={`${styles.detailsBox} d-flex align-items-center`}>
            <h5 className={`m-0 text-capitalize ${styles.detailsTitle}`}>
              dataset name:
            </h5>
            <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
              {item.name}
            </h6>
          </div>

          {/* box  */}
          <div className={`${styles.detailsBox} d-flex align-items-center`}>
            <h5 className={`m-0 text-capitalize ${styles.detailsTitle}`}>
              dataset tags:
            </h5>
            <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
              {item.tags &&
                item.tags.map((tag, index) => (
                  <span key={index} style={{ textDecoration: "underline" }}>
                    {tag} {item.tags.length - 1 === index ? "" : ", "}
                  </span>
                ))}
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
                owner - {item.metadata.owner}
              </h6>
              <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
                Training/Test/Validation Split - {item?.splitData?.training}/
                {item?.splitData?.test}/{item?.splitData?.validation}
              </h6>
              <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
                total number of images - {item.metadata.images}
              </h6>
              <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
                annotaed images - {item.metadata.a_images}
              </h6>
              <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
                number of unique classes - {item.metadata.classes}
              </h6>
            </div>
          </div>
        </div>
        <div className="col-6">
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
              name: item.name,
              tag: item.tags,
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
        <Modal title={`edit dataset - ${item.name}`}>
          <EditDataset />
        </Modal>
      )}
    </section>
  );
}
