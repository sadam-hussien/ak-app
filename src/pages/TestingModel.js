import React, { useContext, useState, useEffect, Fragment } from "react";

import { Store } from "../store";

import { Link, useParams } from "react-router-dom";

import FileUploader from "../components/crud/FileUploader";

import { ChevronLeft } from "@mui/icons-material";

import styles from "../styles/models/index.module.css";

export default function TestingModel() {
  const { id } = useParams();
  const { modelStore } = useContext(Store);

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

  return (
    <section className="p-l p-r p-b p-t">
      <Link to={`/model/${id}`} className={`${styles.backBtn} text-capitalize`}>
        <ChevronLeft />
        <span>back</span>
      </Link>

      {item ? (
        <Fragment>
          <h5 className={`text-capitalize text-center ${styles.title}`}>
            testing model - {item.name}
          </h5>
          <div className="row">
            <div className="col-8">
              <FileUploader />
            </div>
            <div className="col-4">
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
            </div>
          </div>
        </Fragment>
      ) : (
        "loading..."
      )}
    </section>
  );
}
