import React, { useContext, useState } from "react";

import { action_next_step, action_toggle_modal, Store } from "../../store";

import TaggingHead from "./TaggingHead";

import TaggingEditor from "./TaggingEditor";

import styles from "../../styles/createDataset/tagging.module.css";

export default function Tagging() {
  const { globalStore, dataStore, dataDispatch, globalDispatch } =
    useContext(Store);
  const { id } = globalStore.modalStatus;
  // find the element
  const findFile = dataStore.files.find((f) => f.id === id);

  const [activeImage, setActiveImage] = useState(findFile);

  const [loading, setLoading] = useState(false);

  const nextImage = () => {
    const findActiveImage = dataStore.files.findIndex(
      (f) => f.id === activeImage.id
    );
    const findNextImage =
      dataStore.files.length - 1 > findActiveImage ? findActiveImage + 1 : "";
    if (findNextImage) {
      const getImage = dataStore.files[findNextImage];
      setActiveImage(getImage);
    }
  };

  const prevImage = () => {
    const findActiveImage = dataStore.files.findIndex(
      (f) => f.id === activeImage.id
    );
    const findPrevImage = findActiveImage > 0 ? findActiveImage - 1 : "";
    if (findPrevImage) {
      const getImage = dataStore.files[findPrevImage];
      setActiveImage(getImage);
    }
  };

  const handleContinue = () => {
    setLoading(true);
    setTimeout(() => {
      globalDispatch(action_toggle_modal({ comp: null }));
      dataDispatch(action_next_step(3));
    }, 3000);
  };

  return (
    <div className={`${styles.tagging}`}>
      <div className="row flex-nowrap g-0">
        <div className="col page-content p-t p-b">
          <div className={`p-l p-r ${styles.taggingRight}`}>
            <TaggingHead next={nextImage} prev={prevImage} />
            <TaggingEditor src={window.URL.createObjectURL(activeImage.file)} />
          </div>
        </div>
        <div className="sidebar">
          <div className={`${styles.sidebar} p-t p-b d-flex flex-column`}>
            <div
              className={`${styles.taggingBtns} d-flex align-items-center justify-content-center g-2`}
            >
              <button type="button" className={styles.doBtn}>
                undo
                <span>
                  <ion-icon name="arrow-undo-outline"></ion-icon>
                </span>
              </button>
              <button type="button" className={styles.doBtn}>
                redo
                <span>
                  <ion-icon name="arrow-redo-outline"></ion-icon>
                </span>
              </button>
            </div>

            <input
              type="text"
              className={`form-control ${styles.input}`}
              placeholder="number of classes"
            />
            <div className="mt-auto d-flex justify-content-end">
              <button
                type="button"
                className={` text-capitalize ${styles.done}`}
                onClick={handleContinue}
              >
                {loading ? (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "done tagging"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
