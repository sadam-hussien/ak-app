import React, { useContext, useState, useEffect } from "react";

import {
  action_toggle_modal,
  action_handle_tags,
  Store,
  action_done_tags,
  action_edit_tags,
} from "../../store";

import TaggingHead from "./TaggingHead";

import ReactPictureTagger from "./editor";

import { UndoOutlined, RedoOutlined } from "@mui/icons-material";

import styles from "../../styles/createDataset/tagging.module.css";

export default function Tagging() {
  const { globalStore, dataStore, dataDispatch, globalDispatch } =
    useContext(Store);
  const { id } = globalStore.modalStatus;
  // find the element
  const findFile = dataStore.files.find((f) => f.id === id);

  const [activeImage, setActiveImage] = useState(findFile);

  const [taggingImage, setTaggingImage] = useState(dataStore.files);

  const [addTag, setAddTag] = useState(true);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (activeImage.tags) {
      const filterTag = dataStore.files.filter((item) => item.tags);
      setTaggingImage(filterTag);
      setAddTag(false);
    } else {
      const filterTag = dataStore.files.filter((item) => !item.tags);
      setTaggingImage(filterTag);
      setAddTag(true);
    }
  }, []);

  const nextImage = () => {
    const findActiveImage = taggingImage.findIndex(
      (f) => f.id === activeImage.id
    );
    const findNextImage =
      taggingImage.length - 1 > findActiveImage ? findActiveImage + 1 : "";
    if (findNextImage) {
      const getImage = taggingImage[findNextImage];
      setActiveImage(getImage);
    }
  };

  const prevImage = () => {
    const findActiveImage = taggingImage.findIndex(
      (f) => f.id === activeImage.id
    );
    const findPrevImage = findActiveImage > 0 ? findActiveImage - 1 : "";
    if (typeof findPrevImage === "number") {
      const getImage = taggingImage[findPrevImage];
      setActiveImage(getImage);
    }
  };

  const handleContinue = () => {
    setLoading(true);
    setTimeout(() => {
      dataDispatch(action_done_tags());
      globalDispatch(action_toggle_modal({ comp: null }));
    }, 3000);
  };

  const handleEditTagsContinue = () => {
    setLoading(true);
    setTimeout(() => {
      dataDispatch(action_edit_tags());
      globalDispatch(action_toggle_modal({ comp: null }));
    }, 3000);
  };

  const tagsUpdated = (tags) => {
    setActiveImage(Object.assign({}, activeImage, { tags }));
    dataDispatch(action_handle_tags({ tags, id: activeImage.id }));
  };

  return (
    <div className={`${styles.tagging}`}>
      <div className="row flex-nowrap g-0">
        <div className="col page-content p-t p-b">
          <div className={`p-l p-r ${styles.taggingRight}`}>
            <TaggingHead next={nextImage} prev={prevImage} />
            <ReactPictureTagger
              imageSrc={window.URL.createObjectURL(activeImage.file)}
              tags={activeImage.tags || []}
              imageAlt={activeImage.filename}
              showTags={true}
              tagsUpdated={tagsUpdated}
            />
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
                  <UndoOutlined />
                </span>
              </button>
              <button type="button" className={styles.doBtn}>
                redo
                <span>
                  <RedoOutlined />
                </span>
              </button>
            </div>

            <input
              type="text"
              className={`form-control ${styles.input}`}
              placeholder="number of classes"
            />
            <div className="mt-auto d-flex justify-content-end">
              {!addTag ? (
                <button
                  type="button"
                  className={` text-capitalize ${styles.done}`}
                  onClick={handleEditTagsContinue}
                >
                  {loading ? (
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    "done editing tagging"
                  )}
                </button>
              ) : (
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
