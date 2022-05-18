import React, { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

import { models } from "../constants";

import { Head } from "../components/global";

import styles from "../styles/dataset/index.module.css";

export default function ModelDetails() {
  const { id } = useParams();

  // fetch single item
  const [item, setItem] = useState(null);

  useEffect(() => {
    const filter = models.filter((item) => parseInt(item.id) === parseInt(id));
    setItem(...filter);
  }, [id]);

  console.log(item);
  // loading
  if (!item) {
    return "loading...";
  }
  return (
    <section className="p-l p-r p-b p-t">
      <Head title={item.name} />

      {/* items  */}
      <div className="row g-5 ">
        <div className="col-5">
          {/* box  */}
          <div className={`${styles.detailsBox} d-flex align-items-center`}>
            <h5 className={`m-0 text-capitalize ${styles.detailsTitle}`}>
              model name :
            </h5>
            <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
              {item.name}
            </h6>
          </div>

          {/* box  */}
          <div className={`${styles.detailsBox} d-flex align-items-center`}>
            <h5 className={`m-0 text-capitalize ${styles.detailsTitle}`}>
              dataset used :
            </h5>
            <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
              <span style={{ textDecoration: "underline" }}>
                {item.datasetUsed}
              </span>
            </h6>
          </div>

          {/* box  */}
          <div className={`${styles.detailsBox}`}>
            <h5
              className={`m-0 pb-4 text-capitalize ${styles.detailsTitle} ${styles.metadata}`}
            >
              dataset metadata -
            </h5>
            <div>
              <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
                owner - {item.metadata.owner}
              </h6>
              <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
                last edited -{" "}
                {new Date().toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </h6>
              <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
                training/test/validation split - {item.splitData.training}/
                {item.splitData.test}/{item.splitData.validation}
              </h6>
              <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
                total number of images : {item.metadata.images}
              </h6>
              <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
                annotaed images: {item.metadata.a_images}
              </h6>
              <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
                number of unique classes: {item.metadata.classes}
              </h6>
              <h6 className={`m-0 text-capitalize ${styles.detailsresponse}`}>
                number of epochs: {item.metadata.epochs}
              </h6>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className={`${styles.detailsBox} d-flex align-items-center`}>
            <h5 className={`m-0 text-capitalize ${styles.detailsTitle}`}>
              model status :
            </h5>
            <h5
              className={`m-0 text-capitalize ${styles.detailsresponse}`}
              style={{ fontWeight: "bold" }}
            >
              {item.status}
            </h5>
          </div>

          {/* box  */}
          <div className={`${styles.detailsBox} d-flex align-items-center`}>
            <h5 className={`m-0 text-capitalize ${styles.detailsTitle}`}>
              training status :
            </h5>
            <h6
              className={`m-0 text-capitalize ${styles.detailsresponse}`}
              style={{ fontWeight: "500" }}
            >
              {item.trainingStatus}% completed
            </h6>
          </div>

          {/* box  */}
          <div className={`${styles.detailsBox} d-flex align-items-center`}>
            <div
              className={` ${styles.percentage}`}
              style={{
                height: "15px",
                border: "2px solid #666",
                width: "100%",
                position: "relative",
                padding: 0,
              }}
            >
              <div
                style={{
                  position: "aboslute",
                  top: 0,
                  left: 0,
                  background: "#ddd",
                  height: "104%",
                  borderRight: "2px solid #666",
                  marginTop: "-0.4px",
                  width: item.trainingStatus + 0.5 + "%",
                }}
              ></div>
            </div>
          </div>

          {/* box  */}
          {item.trainingStatus == 100 && (
            <div
              className={`${styles.detailsBox}`}
              style={{ marginLeft: "15%" }}
            >
              <div className={`${styles.detailsBox} d-flex align-items-center`}>
                <h6 className={`m-0 text-capitalize ${styles.detailsTitle}`}>
                  validation accuracy :
                </h6>
              </div>
              <div className={`${styles.detailsBox} d-flex align-items-center`}>
                <h6 className={`m-0 text-capitalize ${styles.detailsTitle}`}>
                  test set accuracy :
                </h6>
              </div>
              <div className={`${styles.detailsBox} d-flex align-items-center`}>
                <h6 className={`m-0 text-capitalize ${styles.detailsTitle}`}>
                  precision (Test) :
                </h6>
              </div>
              <div className={`${styles.detailsBox} d-flex align-items-center`}>
                <h6 className={`m-0 text-capitalize ${styles.detailsTitle}`}>
                  recall (Test) :
                </h6>
              </div>
            </div>
          )}

          {/* box  */}
          <div
            className={`${styles.detailsBox} `}
            style={{ marginLeft: "15%", width: "50%" }}
          >
            <Link
              to={`/test-model/${item.id}`}
              className={`our-btn d-inline-flex ${styles.editBtn} text-capitalize`}
              style={{
                marginLeft: "0",
                margin: "auto",
                width: "90%",
              }}
            >
              test this model
            </Link>
          </div>
        </div>
      </div>

      <Link
        to={`#`}
        className={`our-btn d-inline-flex ${styles.editBtn} text-capitalize`}
        style={{ marginLeft: "0" }}
      >
        edit this model
      </Link>
    </section>
  );
}
