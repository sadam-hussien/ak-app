import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Store, action_create_model, action_toggle_modal } from "../../store";

import { Formik, Form } from "formik";

import { Btn, NormalField, SelectField } from "../global";

import styles from "../../styles/crud/index.module.css";

import Styles from "../../styles/global/form.module.css";

export default function CreateModel() {
  const navigate = useNavigate();
  // store
  const { modelDispatch, globalDispatch } = useContext(Store);
  // state
  const [loading, setLoading] = useState(false);

  const selectOptions = (start, end) => {
    let nums = [];
    for (let i = start; i < end; i++) {
      nums.push({ label: i, value: i });
    }
    return nums;
  };

  const submitForm = (values, actions) => {
    setLoading(true);
    new Promise((resolve) => {
      setTimeout(() => {
        modelDispatch(
          action_create_model({
            id: Math.random(),
            updated_at: new Date(),
            image: "",
            datasetUsed: values.datasets,
            status: "under training",
            trainingStatus: 67,
            splitData: {
              training: 60,
              test: 20,
              validation: 10,
            },
            metadata: {
              owner: "Pankaj Goel",
              images: 200,
              a_images: 199,
              classes: 3,
              epochs: 8,
            },
            ...values,
          })
        );
        resolve();
      }, 300);
    }).then(() => {
      globalDispatch(action_toggle_modal({ comp: null }));
    });
  };

  return (
    <Formik
      initialValues={{
        name: "",
        type: "segmentation",
        model: "",
        datasets: "",
        hpochs: "",
        hp2: "",
        hp3: "",
        hp4: "",
        hp5: "",
        hp6: "",
      }}
      onSubmit={(values, actions) => submitForm(values, actions)}
    >
      {() => (
        <Form>
          <NormalField
            name="name"
            type="text"
            placeholder=""
            label="what do you want to call your model:"
            wrapperStyle={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            style={{
              maxWidth: "330px",
              height: "35px",
              backgroundColor: "var(--link-bg-color)",
              border: "none",
            }}
            labelStyle={{ color: "var(--new-dark-color)", marginBottom: "0" }}
          />
          <div
            className={`d-flex align-items-center justify-content-between ${Styles.formGroup}`}
          >
            <label
              className={Styles.label}
              style={{ color: "var(--new-dark-color)" }}
            >
              model type
            </label>
            <SelectField
              name="type"
              options={[
                { label: "segmentaion", value: "segmentation" },
                { label: "classification", value: "classification" },
              ]}
              style={{ marginBottom: "0", flex: 1, maxWidth: "330px" }}
            />
          </div>
          <div
            className={`d-flex align-items-center justify-content-between ${Styles.formGroup}`}
          >
            <label
              className={Styles.label}
              style={{ color: "var(--new-dark-color)" }}
            >
              select model
            </label>
            <SelectField
              name="model"
              options={[
                { label: "model 1", value: "model one" },
                { label: "model two", value: "model tow" },
              ]}
              style={{ marginBottom: "0", flex: 1, maxWidth: "330px" }}
            />
          </div>
          <div
            className={`d-flex align-items-center justify-content-between ${Styles.formGroup}`}
          >
            <label
              className={Styles.label}
              style={{ color: "var(--new-dark-color)" }}
            >
              select datasets
            </label>
            <SelectField
              name="datasets"
              options={[
                { label: "dataset 1", value: "dataset one" },
                { label: "dataset two", value: "dataset tow" },
              ]}
              style={{ marginBottom: "0", flex: 1, maxWidth: "330px" }}
            />
          </div>

          <div className={`${styles.hyperParams}`}>
            <h5 className={`${styles.secTitle}`}>hyper parameters</h5>
            <div className="row">
              <div className="col-4">
                <div
                  className={`d-flex align-items-center ${Styles.formGroup}`}
                >
                  <label
                    className={Styles.label}
                    style={{ color: "var(--new-dark-color)" }}
                  >
                    epochs:
                  </label>
                  <SelectField
                    name="hpochs"
                    options={selectOptions(0, 10)}
                    style={{
                      marginBottom: "0",
                      flex: 1,
                      maxWidth: "100px",
                      marginLeft: "20px",
                    }}
                  />
                </div>
              </div>

              <div className="col-4">
                <div
                  className={`d-flex align-items-center ${Styles.formGroup}`}
                >
                  <label
                    className={Styles.label}
                    style={{ color: "var(--new-dark-color)" }}
                  >
                    hp-2:
                  </label>
                  <SelectField
                    name="hp2"
                    options={selectOptions(0, 10)}
                    style={{
                      marginBottom: "0",
                      flex: 1,
                      maxWidth: "100px",
                      marginLeft: "20px",
                    }}
                  />
                </div>
              </div>

              <div className="col-4">
                <div
                  className={`d-flex align-items-center ${Styles.formGroup}`}
                >
                  <label
                    className={Styles.label}
                    style={{ color: "var(--new-dark-color)" }}
                  >
                    hp-3:
                  </label>
                  <SelectField
                    name="hp3"
                    options={selectOptions(0, 10)}
                    style={{
                      marginBottom: "0",
                      flex: 1,
                      maxWidth: "100px",
                      marginLeft: "20px",
                    }}
                  />
                </div>
              </div>

              <div className="col-4">
                <div
                  className={`d-flex align-items-center ${Styles.formGroup}`}
                >
                  <label
                    className={Styles.label}
                    style={{ color: "var(--new-dark-color)" }}
                  >
                    hp-4:
                  </label>
                  <SelectField
                    name="hp4"
                    options={selectOptions(0, 10)}
                    style={{
                      marginBottom: "0",
                      flex: 1,
                      maxWidth: "100px",
                      marginLeft: "20px",
                    }}
                  />
                </div>
              </div>

              <div className="col-4">
                <div
                  className={`d-flex align-items-center ${Styles.formGroup}`}
                >
                  <label
                    className={Styles.label}
                    style={{ color: "var(--new-dark-color)" }}
                  >
                    hp-5:
                  </label>
                  <SelectField
                    name="hp5"
                    options={selectOptions(0, 10)}
                    style={{
                      marginBottom: "0",
                      flex: 1,
                      maxWidth: "100px",
                      marginLeft: "20px",
                    }}
                  />
                </div>
              </div>

              <div className="col-4">
                <div
                  className={`d-flex align-items-center ${Styles.formGroup}`}
                >
                  <label
                    className={Styles.label}
                    style={{ color: "var(--new-dark-color)" }}
                  >
                    hp-6:
                  </label>
                  <SelectField
                    name="hp6"
                    options={selectOptions(0, 10)}
                    style={{
                      marginBottom: "0",
                      flex: 1,
                      maxWidth: "100px",
                      marginLeft: "20px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`d-flex justify-content-end ${styles.datasetCreateFooter}`}
          >
            <Btn
              loading={loading}
              type="submit"
              label="create model"
              customeClass="our-btn"
              style={{
                maxWidth: "250px",
                maxHeight: "35px",
                color: "var(--new-dark-color)",
                backgroundColor: "var(--new-el-bg-color)",
                fontWeight: "bold",
              }}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
