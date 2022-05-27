import React, { useContext, useState, useEffect, Fragment } from "react";

import { Store, action_model_reset_files } from "../store";

import { Link, useParams } from "react-router-dom";

import FileUploader from "../components/crud/FileUploader";

import { ChevronLeft } from "@mui/icons-material";

import styles from "../styles/models/index.module.css";

export default function TestingModel() {
  const { id } = useParams();
  const { modelStore, modelDispatch } = useContext(Store);

  // fetch single item
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (modelStore.models) {
      const filter = modelStore.models.filter(
        (item) => parseInt(item.id) === parseInt(id)
      );
      setItem(...filter);
    }
  }, [id, modelStore.models]);

  console.log(item);

  return (
    <section className="p-l p-r p-b p-t">
      <Link
        to={`/models/${id}`}
        className={`${styles.backBtn} text-capitalize`}
      >
        <ChevronLeft />
        <span>back</span>
      </Link>

      {item ? (
        <Fragment>
          <h5 className={`text-capitalize text-center ${styles.title}`}>
            testing model - {item.name}
          </h5>
          <div className="row g-4">
            <div className="col-md-8">
              {item.files ? (
                <div>
                  <img
                    src={window.URL.createObjectURL(item.files[0].file)}
                    alt="name of pic"
                    className="img-fluid"
                  />
                </div>
              ) : (
                <FileUploader id={id} showFolder="false" />
              )}
            </div>
            <div className="col-md-4">
              <h6 className={`text-capitalize ${styles.info}`}>
                model: {item.name}
              </h6>
              <h6 className={`text-capitalize ${styles.info}`}>
                model type: {item.type}
              </h6>
              <h6 className={`text-capitalize ${styles.info}`}>result: cats</h6>
              <h6 className={`text-capitalize ${styles.info}`}>
                accurency: 97%
              </h6>
              {item.files && (
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    onClick={() => modelDispatch(action_model_reset_files(id))}
                    className={`our-btn ${styles.anotherImg}`}
                  >
                    test another image
                  </button>
                </div>
              )}
            </div>
          </div>
        </Fragment>
      ) : (
        "loading..."
      )}
    </section>
  );
}
