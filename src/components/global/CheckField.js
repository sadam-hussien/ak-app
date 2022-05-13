import React from "react";

import { Field } from "formik";

import { CheckOutlined } from "@mui/icons-material";

import styles from "../../styles/global/form.module.css";

export default function CheckField({ label, value, name, style }) {
  return (
    <div className={`form-group ${styles.formGroup}`} style={style}>
      <Field
        id={label}
        type="checkbox"
        name={name}
        value={value}
        className={`d-none ${styles.checkboxInput}`}
      />
      <label
        htmlFor={label}
        className={`d-flex align-items-center ${styles.checkBoxOuter} ${styles.checkbox}`}
      >
        <span
          className={`d-inline-flex align-items-center justify-content-center ${styles.checkBoxInner}`}
        >
          <span className={styles.checkBoxIcon}>
            <CheckOutlined />
          </span>
        </span>
        <span className={`${styles.checkBoxLabel} text-capitalize`}>
          {label}
        </span>
      </label>
    </div>
  );
}
