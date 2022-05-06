import React from "react";

import { Field } from "formik";

import styles from "../../styles/global/form.module.css";

export default function SelectField({ name, options, style }) {
  return (
    <div
      className={`d-flex align-items-center ${styles.selectBox}`}
      style={style}
    >
      <Field
        id={name}
        name={name}
        as="select"
        className={`form-control ${styles.select}`}
      >
        {options &&
          options.map((opt, index) => (
            <option value={opt.value} label={opt.label} key={index} />
          ))}
      </Field>
      {/* icon  */}
      <label htmlFor={name} className={`${styles.selectIcon} mb-0`}>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </label>
    </div>
  );
}
