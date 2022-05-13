import React, { useContext, useState } from "react";

import {
  action_next_step,
  action_toggle_modal,
  action_add_new_tag,
  action_edit_tag,
  action_delete_tag,
  action_handle_tags,
  Store,
  action_done_tags,
} from "../../store";

import TaggingHead from "./TaggingHead";

// import TaggingEditor from "./TaggingEditor";

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

  const [imageTagging, setImageTagging] = useState({});

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
      dataDispatch(action_done_tags());
      globalDispatch(action_toggle_modal({ comp: null }));
      // dataDispatch(action_next_step(3));
    }, 3000);
  };

  // add tags
  const addTagsToStore = (tags) => {
    dataDispatch(action_add_new_tag({ tags, id: activeImage.id }));
  };
  // edit tags
  const editTagsStore = (tags) => {
    dataDispatch(action_edit_tag({ tags, id: activeImage.id }));
  };

  // delete tags
  const deleteTagsFromStore = () => {
    dataDispatch(action_delete_tag({ id: activeImage.id }));
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
            {/* <TaggingEditor src={window.URL.createObjectURL(activeImage.file)} /> */}
            <ReactPictureTagger
              imageSrc={window.URL.createObjectURL(activeImage.file)}
              tags={activeImage.tags || []}
              imageAlt={activeImage.filename}
              showTags={true}
              tagsUpdated={tagsUpdated}
              addTagsToStore={addTagsToStore}
              editTagsStore={editTagsStore}
              deleteTagsFromStore={deleteTagsFromStore}
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
