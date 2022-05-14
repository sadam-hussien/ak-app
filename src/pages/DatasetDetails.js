import React, { useEffect, useState, useContext } from "react";

import { useParams, Link } from "react-router-dom";

import { Store } from "../store";

import { Head } from "../components/global";

import styles from "../styles/dataset/index.module.css";

export default function DatasetDetails() {
  const { id } = useParams();

  const { dataStore } = useContext(Store);

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
            <h5 className={`${styles.datasetImgTitle} text-capitalize`}>
              dataset display image
            </h5>
          </div>
        </div>
      </div>

      <Link
        to="/datasetedit"
        className={`our-btn d-inline-flex ${styles.editBtn} text-capitalize`}
      >
        edit this dataset
      </Link>
    </section>
  );
}
