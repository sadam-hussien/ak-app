import React from "react";

import { Formik, Form } from "formik";

import { Btn, NormalField, SelectField } from "../global";

import styles from "../../styles/crud/index.module.css";

import Styles from "../../styles/global/form.module.css";

export default function CreateDataSet() {
  const submitForm = (values, actions) => {
    console.log(values);
    actions.setSubmitting(false);
  };
  return (
    <Formik
      initialValues={{ name: "", tags: "" }}
      onSubmit={(values, actions) => submitForm(values, actions)}
    >
      {() => (
        <Form>
          <NormalField
            name="name"
            type="text"
            placeholder=""
            label="what do you want to call your dataset:"
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
          <div className="d-flex align-items-center justify-content-between">
            <label
              className={Styles.label}
              style={{ color: "var(--new-dark-color)" }}
            >
              dataset tags (this will used to filter):{" "}
            </label>
            <SelectField
              name="tags"
              options={[
                { label: "segmentaion", value: "segmentation" },
                { label: "classification", value: "classification" },
              ]}
              style={{ marginBottom: "0", flex: 1, maxWidth: "330px" }}
            />
          </div>

          <div
            className={`d-flex justify-content-end ${styles.datasetCreateFooter}`}
          >
            <Btn
              type="submit"
              label="create new dataset"
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
