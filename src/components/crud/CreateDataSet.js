import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Store, action_create_dataset, action_toggle_modal } from "../../store";

import { Formik, Form } from "formik";

import * as Yup from "yup";

import { Btn, NormalField, SelectField } from "../global";

import styles from "../../styles/crud/index.module.css";

import Styles from "../../styles/global/form.module.css";

export default function CreateDataSet() {
  const navigate = useNavigate();
  // store
  const { dataDispatch, globalDispatch } = useContext(Store);
  // state
  const [loading, setLoading] = useState(false);

  const submitForm = (values, actions) => {
    setLoading(true);
    dataDispatch(
      action_create_dataset({ name: values.name, tag: values.tags })
    );
    setTimeout(() => {
      globalDispatch(action_toggle_modal({ comp: null }));
      navigate("/create-database", {
        state: { from: "create", name: values.name },
      });
    }, 400);
  };

  const schema = Yup.object().shape({
    name: Yup.string().required("the dataset name is required"),
  });

  return (
    <Formik
      initialValues={{ name: "", tags: "segmentation" }}
      onSubmit={(values, actions) => submitForm(values, actions)}
      validationSchema={schema}
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
              loading={loading}
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
